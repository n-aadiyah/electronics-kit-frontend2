import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ViewCartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-center">🛒 My Cart</h2>

      <div className="row">
        {/* Left: Cart Items */}
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img src={item.image} className="img-fluid" alt={item.name} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <p>₹{item.price} × {item.quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-end pe-3">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p>Estimated Delivery: <strong>3-5 days</strong></p>
            <h6>Total: ₹{total}</h6>
            <button className="btn btn-success mt-3 w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCartPage;


