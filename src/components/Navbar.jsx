import { Link, NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg tt-navbar">
      <div className="container">
        <Link className="navbar-brand tt-brand" to="/">
          <span className="tt-brand-icon">t.</span> TinyTrend
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item"><NavLink end className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Shop All</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">Our Story</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <Link to="/cart" className="tt-cart">
            <i className="bi bi-bag-heart" /> Bag <span>{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
