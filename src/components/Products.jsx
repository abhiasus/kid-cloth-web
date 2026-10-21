import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const BRANDS = ["Mini Boden", "Carter's", "Levi's Kids", "H&M Kids", "Tommy Hilfiger Kids"];
const CATEGORIES = ["Dresses", "Jackets", "T-Shirts", "Sets", "Accessories"];

export default function Products({ products, addToCart, cartCount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  // brand & category live in the URL so links from Home work
  const brand = searchParams.get("brand") || "All Brands";
  const category = searchParams.get("category") || "All Categories";

  function setParam(key, value, allValue) {
    const next = new URLSearchParams(searchParams);
    if (value === allValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  }

  let filtered = products.filter((p) => {
    const q = search.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    const matchesBrand = brand === "All Brands" || p.brand === brand;
    const matchesCategory = category === "All Categories" || p.category === category;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  if (sort === "low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.price - a.price);

  function clearFilters() {
    setSearch("");
    setSort("featured");
    setSearchParams({});
  }

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="container tt-page">
        <span className="tt-eyebrow">THE TINYTREND EDIT</span>
        <h1 className="tt-page-title">A little something<br /><em>for every day.</em></h1>
        <p className="text-muted">
          Explore favourite brands, everyday essentials and special little outfits.
        </p>

        <div className="tt-filter row g-3 my-4">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Search clothing..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={brand} onChange={(e) => setParam("brand", e.target.value, "All Brands")}>
              <option>All Brands</option>
              {BRANDS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" value={category} onChange={(e) => setParam("category", e.target.value, "All Categories")}>
              <option>All Categories</option>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low">Price: Low to high</option>
              <option value="high">Price: High to low</option>
            </select>
          </div>
        </div>

        <p className="text-muted small">{filtered.length} styles to explore</p>

        <div className="row g-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1 text-muted" />
            <h4 className="mt-3">No matching styles found</h4>
            <p>Try a different brand, category or search term.</p>
            <button className="btn tt-primary" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
