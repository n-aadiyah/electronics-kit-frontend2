import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent triggering navigation
    addToCart(product);
    navigate("/viewcart"); // Navigate to full cart view
  };

  const handleCardClick = () => {
    navigate(`/products/${product._id}`); // Navigate to product details page
  };

  return (
    <div
      className="card h-100 shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
     <img src={product.image} alt={product.name} className="img-fluid" />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          {product.description?.substring(0, 80)}...
        </p>
        <div className="mt-auto">
          <p className="fw-bold mb-2">₹{product.price}</p>
          <button
            className="btn btn-dark w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

