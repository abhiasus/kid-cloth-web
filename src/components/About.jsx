import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { img } from "../data/images";

export default function About({ cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="container tt-page">
        <section className="tt-about-hero">
          <span className="tt-eyebrow">OUR LITTLE STORY</span>
          <h1 className="tt-page-title">
            Childhood looks good<br /><em>on everyone.</em>
          </h1>
          <p>
            We believe kids' clothes should feel as good as they look.
            TinyTrend brings together playful designs, everyday comfort,
            and trusted children's fashion brands.
          </p>
          <img src={img("about_page_image")} alt="Children enjoying their day" data-aos="fade-up" />
        </section>

        <section className="row g-4 tt-values">
          <div className="col-md-4">
            <span>01 / COMFORT</span>
            <h3>Comfort first</h3>
            <p>Clothes that are ready for running, climbing, dancing and relaxing.</p>
          </div>
          <div className="col-md-4">
            <span>02 / PERSONALITY</span>
            <h3>Personal style</h3>
            <p>Different brands, colours and designs for every little personality.</p>
          </div>
          <div className="col-md-4">
            <span>03 / EVERYDAY</span>
            <h3>Everyday joy</h3>
            <p>Simple shopping for outfits that make ordinary days feel special.</p>
          </div>
        </section>

        <section className="tt-about-banner">
          <span className="tt-eyebrow">MADE FOR LITTLE MOMENTS</span>
          <h2>Let them be<br /><em>wonderfully them.</em></h2>
          <Link to="/products" className="btn tt-primary">Explore our collection ↗</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
