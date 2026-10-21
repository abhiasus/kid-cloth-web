export default function ProductCard({ product, addToCart }) {
  return (
    <div className="col-6 col-lg-3">
      <div className="tt-product-card">
        <div className="tt-product-image">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="tt-product-body">
          {product.tag && <span className="tt-tag">{product.tag}</span>}
          <small className="text-muted d-block">{product.brand}</small>
          <h6>{product.name}</h6>
          <div className="tt-product-meta">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <small className="text-muted">{product.age}</small>
          </div>
          <button
            type="button"
            className="btn tt-add-btn"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-bag-plus" /> Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}
