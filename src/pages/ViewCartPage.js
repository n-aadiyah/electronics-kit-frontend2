import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added
import { CartContext } from "../context/CartContext";

const ViewCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Added

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8">
          <h2 className="fw-bold text-dark mb-4">
            Shopping Bag ({cartItems.length})
          </h2>

          {cartItems.map((item) => (
            <div key={item.id} className="bg-light p-3 rounded mb-3">
              <div className="d-flex align-items-center justify-content-between">
                {/* Image & Info */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div>
                    <p className="fw-semibold mb-1">{item.name}</p>
                    <p className="text-muted mb-0">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn btn-sm rounded-circle border bg-light fw-bold"
                    style={{ width: "32px", height: "32px" }}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>

                  <span className="fw-semibold text-center" style={{ width: "30px" }}>
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-sm rounded-circle border bg-light fw-bold"
                    style={{ width: "32px", height: "32px" }}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <div className="d-flex justify-content-end mt-2">
                <button
                  className="btn fw-bold rounded-pill px-3 py-1"
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    fontSize: "0.9rem",
                    border: "none",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Order Summary */}
        <div className="col-md-4">
          <div className="p-4 sticky-top" style={{ top: "100px" }}>
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p className="text-muted mb-2">
              Estimated Delivery: <span className="fw-semibold">3-5 days</span>
            </p>
            <p className="text-muted mb-2">
              Items: <span className="fw-semibold">{cartItems.length}</span>
            </p>
            <h6 className="mt-3">Total: ₹{total}</h6>
            <button
              className="btn rounded-pill mt-4 w-100"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                border: "none",
              }}
              onClick={() => navigate("/checkout")} // ✅ Added
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
