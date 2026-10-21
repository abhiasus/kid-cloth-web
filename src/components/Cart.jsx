import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { img } from "../data/images";

export default function Cart({ cart, cartCount, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="container tt-page">
        <span className="tt-eyebrow">YOUR LITTLE FINDS</span>
        <h1 className="tt-page-title">Shopping <em>bag.</em></h1>

        {cart.length === 0 ? (
          <div className="tt-empty">
            <img className="tt-empty-img" src={img("cart_page_image")} alt="Empty shopping bag" />
            <h3>Your bag is waiting for something lovely.</h3>
            <p>Discover little outfits for their next adventure.</p>
            <Link to="/products" className="btn tt-primary mt-3">Explore the collection</Link>
          </div>
        ) : (
          <>
            <div className="tt-cart-items">
              {cart.map((item) => (
                <div className="tt-cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="flex-grow-1">
                    <small>{item.brand}</small>
                    <h5>{item.name}</h5>
                    <p className="text-muted small mb-2">{item.age}</p>
                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>

                    <div className="mt-3 d-flex align-items-center flex-wrap gap-2">
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                      <span className="px-1">{item.quantity}</span>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                      <button className="btn btn-sm text-danger" onClick={() => removeFromCart(item.id)}>
                        <i className="bi bi-trash" /> Remove
                      </button>
                    </div>
                  </div>

                  <strong className="tt-line-total">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </strong>
                </div>
              ))}
            </div>

            <div className="tt-total">
              <p className="text-muted small">Order summary</p>
              <h4>Total: ₹{total.toLocaleString("en-IN")}</h4>
              <p className="text-muted small">Shipping and taxes are not calculated in this demo.</p>
              <button
                className="btn tt-primary"
                onClick={() => window.alert("Demo checkout only. No order or payment was processed.")}
              >
                Continue to checkout <i className="bi bi-arrow-up-right" />
              </button>
              <div className="mt-3">
                <Link to="/products" className="tt-text-link">Continue shopping ↗</Link>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
