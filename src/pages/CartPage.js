import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-5 pt-4 mb-5">
      <h2 className="text-dark fw-bold fs-4 px-1 pt-4 pb-3">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted px-1">Your cart is currently empty.</p>
      ) : (
        <div className="row">
          {/* Cart Items Section */}
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-2 p-3 mb-4 d-flex align-items-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="me-3 rounded"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div>
                  <h5 className="fw-semibold text-dark mb-1">{item.name}</h5>
                  <p className="text-muted small mb-2">{item.description}</p>
                  <div className="fw-bold text-dark">₹{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="col-md-4">
            <div className="border rounded-2 p-4 bg-light">
              <h5 className="text-dark fw-bold mb-3">Order Summary</h5>

              <div className="row border-top pt-3">
                <div className="col-6 text-secondary small">Items</div>
                <div className="col-6 text-dark small text-end">
                  {cartItems.length}
                </div>
              </div>
              <div className="row border-top pt-3">
                <div className="col-6 text-secondary small">Total Price</div>
                <div className="col-6 text-dark small text-end">₹{totalPrice}</div>
              </div>
              <div className="d-grid mt-4">
                <button className="btn btn-success fw-semibold">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPage;

