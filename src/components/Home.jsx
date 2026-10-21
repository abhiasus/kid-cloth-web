import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { img } from "../data/images";

const categories = [
  { name: "Dresses", image: img("category_dresses") },
  { name: "Jackets", image: img("category_jackets_sweaters") },
  { name: "Sets", image: img("category_sets_bottoms") },
  { name: "T-Shirts", image: img("category_tshirts_tops") },
];

export default function Home({ products, addToCart, cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />

      <main>
        <section className="tt-hero container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5" data-aos="fade-up">
              <span className="tt-eyebrow">THE LITTLE STYLE EDIT · 2026</span>
              <h1>Small humans.<br /><em>Big style.</em></h1>
              <p>
                Discover thoughtful kidswear from the brands you love.
                Comfy essentials, playful prints, and everyday favourites.
              </p>
              <Link to="/products" className="btn tt-primary">
                Explore the collection <i className="bi bi-arrow-up-right" />
              </Link>
              <div className="tt-hero-note">
                <i className="bi bi-heart-fill" /> Made for movement, mess and magic.
              </div>
            </div>

            <div className="col-lg-7">
              <img
                className="tt-hero-banner"
                src={img("home_hero_banner")}
                alt="Kids fashion collection"
              />
            </div>
          </div>
        </section>

        <section className="container">
          <img className="tt-features" src={img("feature_icons")} alt="Free shipping, secure payment, easy returns, support" />
        </section>

        <section className="container tt-section">
          <div className="tt-section-heading">
            <div>
              <span className="tt-eyebrow">SHOP BY CATEGORY</span>
              <h2>Find their next favourite</h2>
            </div>
            <Link to="/products" className="tt-text-link">View everything ↗</Link>
          </div>

          <div className="row g-3">
            {categories.map((c) => (
              <div className="col-6 col-md-3" key={c.name}>
                <Link to={`/products?category=${encodeURIComponent(c.name)}`} className="tt-cat-tile">
                  <img src={c.image} alt={c.name} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="tt-pink-section">
          <div className="container tt-section">
            <div className="tt-section-heading">
              <div>
                <span className="tt-eyebrow">HANDPICKED FOR LITTLE PEOPLE</span>
                <h2>Fresh from the rack</h2>
              </div>
              <Link to="/products" className="tt-text-link">Shop all ↗</Link>
            </div>

            <div className="row g-4">
              {products.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        <section className="container tt-promo">
          <div>
            <span className="tt-eyebrow">GOOD CLOTHES, GOOD DAYS</span>
            <h2>Every little detail<br />makes a difference.</h2>
            <p>Comfort-first fabrics. Play-ready designs. Styles for their big little world.</p>
            <Link to="/about" className="btn tt-primary">Meet TinyTrend</Link>
          </div>
          <div className="tt-promo-mark">
            little<br /><em>things</em><span>matter.</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
