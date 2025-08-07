import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h4 className="text-muted">Your cart is currently empty.</h4>
      </div>
    );
  }

  const latestItem = cartItems[cartItems.length - 1];
  const estimatedTotal = latestItem.price * latestItem.quantity;

  return (
    <div className="container mt-5 pt-4 mb-5">
      <div className="card shadow-sm border-0 p-4">
        <div className="row g-3 align-items-center">
          {/* Product Image */}
          <div className="col-md-3 text-center">
         <img
  src={`/images/${latestItem.image}`} // 👈 prepend public path
  alt={latestItem.name || latestItem.title}
  className="img-fluid"
  onError={(e) => (e.target.src = "/images/no-image.png")}
/>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h5 className="fw-semibold text-dark mb-2">{latestItem.title}</h5>
            <p className="text-muted mb-1 small">Category: {latestItem.category}</p>
            <p className="text-muted mb-1 small">Price: ₹{latestItem.price}</p>
            <p className="text-muted mb-1 small">Quantity: {latestItem.quantity}</p>
            <p className="fw-bold text-dark mt-3">Estimated Total: ₹{estimatedTotal}</p>
          </div>

          {/* Action Buttons */}
          <div className="col-md-3 d-flex flex-column gap-2">
            <button
              className="btn btn-success w-100 fw-semibold"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
            <button
              className="btn btn-outline-dark w-100 fw-semibold"
              onClick={() => navigate("/viewcart")}
            >
              View Full Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
