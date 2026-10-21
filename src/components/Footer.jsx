import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="tt-footer">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">
          <div className="col-md-5">
            <h3 className="tt-brand text-white">
              <span className="tt-brand-icon">t.</span> TinyTrend
            </h3>
            <p>Little outfits. Big personalities. Fashion for every little adventure.</p>
          </div>
          <div className="col-6 col-md-3">
            <h6>EXPLORE</h6>
            <Link to="/products">Shop All</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="col-6 col-md-4">
            <h6>FOLLOW OUR WORLD</h6>
            <div className="tt-social">
              <i className="bi bi-instagram" />
              <i className="bi bi-facebook" />
              <i className="bi bi-pinterest" />
            </div>
            <p className="mt-3">hello@tinytrend.example</p>
          </div>
        </div>
        <hr />
        <p className="tt-copy">© 2026 TinyTrend Kidswear. Made for little moments.</p>
      </div>
    </footer>
  );
}
