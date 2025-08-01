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
  console.log("Latest Item:", latestItem);

  const estimatedTotal = latestItem.price * latestItem.quantity;

  return (
    <div className="container mt-5 pt-4 mb-5">

      <div className="card shadow-sm border-0 p-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-3 text-center">
            <img
              src={latestItem.image}
              alt={latestItem.title}
              className="img-fluid rounded"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6">
            <h5 className="fw-semibold text-dark mb-1">{latestItem.title}</h5>
            <p className="text-muted mb-1 small">Category: {latestItem.category}</p>
            <p className="text-muted mb-1 small">Price: ₹{latestItem.price}</p>
            <p className="text-muted mb-1 small">Quantity: {latestItem.quantity}</p>
            <p className="fw-bold text-dark mb-0">Estimated Total: ₹{estimatedTotal}</p>
          </div>

          <div className="col-md-3 d-flex flex-column gap-2">
            <button className="btn btn-success fw-semibold w-100">
              Checkout
            </button>
            <button
              className="btn btn-outline-primary fw-semibold w-100"
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
