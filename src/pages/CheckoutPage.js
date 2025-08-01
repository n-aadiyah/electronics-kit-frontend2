import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
  <div className="container my-5" style={{ marginTop: "80px" }}>      <div className="row">
        {/* Left: Shipping Form */}
        <div className="col-lg-8 col-md-8 mb-4">
          <form onSubmit={handleSubmit} >
            <h4 className="mb-4">Shipping Information</h4>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                required
              />
            </div>
            <div className="row g-3 mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pincode"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone number"
                required
              />
            </div>
            <button className="btn btn-primary px-4 py-2 fw-bold" type="submit">
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="col-md-4 mt-5 mt-md-0">
          <div>
        <h5 className="mb-3">Order Summary</h5>
            {cartItems.length === 0 ? (
              <p className="text-muted">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div
                      className="rounded bg-cover bg-center me-3"
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundImage: `url(${item.image || "https://via.placeholder.com/56"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div>
                      <p className="mb-0 fw-medium">{item.name}</p>
                      <small className="text-muted">Quantity: {item.quantity}</small>
                    </div>
                  </div>
                ))}

                <hr />
                <div className="d-flex justify-content-between py-1">
                  <span className="text-muted">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between py-1">
                  <span className="text-muted">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="d-flex justify-content-between py-1 fw-bold">
                  <span>Total</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
