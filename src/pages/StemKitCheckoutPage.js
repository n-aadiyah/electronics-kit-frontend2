// src/pages/StemKitCheckoutPage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = process.env.REACT_APP_API_URL;

const StemKitCheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const stemKitData = location.state?.selectedKit;
  const subscriptionData = location.state?.selectedSubscription;

  const [quantity, setQuantity] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [subtotal, setSubtotal] = useState(subscriptionData?.price || 0);

  useEffect(() => {
    if (!stemKitData || !subscriptionData) {
      navigate("/stemkits");
    }
  }, [stemKitData, subscriptionData, navigate]);

  useEffect(() => {
    if (subscriptionData) {
      setSubtotal(subscriptionData.price * quantity);
    }
  }, [quantity, subscriptionData]);

  const handleChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to place an order.");
      navigate("/auth?msg=login-required");
      return;
    }

    // Correct payload to match backend
    const orderData = {
      stemKitId: stemKitData._id,
      subscriptionType: subscriptionData.type,
      price: subtotal,
      shippingInfo: { ...shippingDetails },
    };

    try {
      const res = await fetch(`${BASE_URL}/api/stemkit-orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ STEM Kit order placed successfully!");
        navigate("/myorders");
      } else {
        alert("❌ Failed to place order: " + data.message);
      }
    } catch (err) {
      alert("❌ Network error: " + err.message);
    }
  };

  if (!stemKitData || !subscriptionData) return null;

  return (
    <div className="container pt-5" style={{ marginTop: "70px" }}>
      <div className="row">
        <div className="col-lg-8 col-md-8 mb-4">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-3">Shipping Information</h3>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Full name"
              required
              value={shippingDetails.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              required
              value={shippingDetails.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              className="form-control mb-3"
              placeholder="Address"
              required
              value={shippingDetails.address}
              onChange={handleChange}
            />
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="City"
                  required
                  value={shippingDetails.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="postalCode"
                  className="form-control"
                  placeholder="Postal Code"
                  required
                  value={shippingDetails.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input
              type="tel"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone number"
              required
              value={shippingDetails.phone}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-dark rounded-pill w-100 mt-3"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        <div className="col-md-4 mt-4 mt-md-0">
          <h3 className="mb-2">Order Summary</h3>
          <div className="d-flex align-items-center mb-3">
            <img
              src={stemKitData.image}
              alt={stemKitData.name}
              width="56"
              height="56"
              className="rounded me-3"
              style={{ objectFit: "cover" }}
            />
            <div>
              <p className="mb-0 fw-medium">{stemKitData.name}</p>
              <div className="d-flex align-items-center mt-1">
                <button
                  type="button"
                  className="btn btn-sm btn-light rounded-circle border"
                  onClick={decreaseQty}
                >
                  −
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  type="button"
                  className="btn btn-sm btn-light rounded-circle border"
                  onClick={increaseQty}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between py-1">
            <span className="text-muted">Subscription</span>
            <span>{subscriptionData.type}</span>
          </div>
          <div className="d-flex justify-content-between py-1">
            <span className="text-muted">Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between py-1">
            <span className="text-muted">Shipping</span>
            <span>Free</span>
          </div>
          <div className="d-flex justify-content-between fw-bold py-1">
            <span>Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StemKitCheckoutPage;
