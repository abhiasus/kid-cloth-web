import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import products from "./data/products";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

export default function App() {
  // cart stores only { id, quantity } so images never go stale
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tt-cart-v2") || "[]");
    } catch {
      return [];
    }
  });

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("tt-cart-v2", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, [location.pathname]);

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (existing) {
        return current.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...current, { id: product.id, quantity: 1 }];
    });
  }

  function updateQuantity(id, change) {
    setCart((current) =>
      current
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + change } : i))
        .filter((i) => i.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((i) => i.id !== id));
  }

  const cartItems = cart
    .map((c) => {
      const p = products.find((x) => x.id === c.id);
      return p ? { ...p, quantity: c.quantity } : null;
    })
    .filter(Boolean);

  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

  const shop = { products, addToCart, cartCount };

  return (
    <Routes>
      <Route path="/" element={<Home {...shop} />} />
      <Route path="/products" element={<Products {...shop} />} />
      <Route path="/about" element={<About cartCount={cartCount} />} />
      <Route path="/contact" element={<Contact cartCount={cartCount} />} />
      <Route
        path="/cart"
        element={
          <Cart
            cart={cartItems}
            cartCount={cartCount}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        }
      />
      <Route path="*" element={<Home {...shop} />} />
    </Routes>
  );
}
