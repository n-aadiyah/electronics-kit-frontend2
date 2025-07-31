import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // 🔁 Navigate to cart page
  };

  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <div className="mt-auto">
          <p className="fw-bold">₹{product.price}</p>
          <button className="btn btn-primary w-100" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
