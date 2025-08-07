import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const ViewCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to place an order.");
      return navigate("/login");
    }

    const items = cartItems.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));

    const orderData = {
      items,
      totalAmount: total,
      shippingInfo,
    };

    try {
      await axios.post(`${BASE_URL}/api/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Order placed successfully!");
      clearCart();
      navigate("/my-orders");
    } catch (error) {
      console.error("Order failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Failed to place order. Try again."
      );
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8">
          <h2 className="fw-bold text-dark mb-4">
            Shopping Bag ({cartItems.length})
          </h2>

          {cartItems.map((item) => (
            <div key={item._id} className="bg-light p-3 rounded mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={`/${item.image}`} // ✅ Correct image path for public folder
                    alt={item.name}
                    width="56"
                    height="56"
                    className="rounded"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/no-image.jpg"; // ✅ fallback image
                    }}
                  />
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
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>

                  <span
                    className="fw-semibold text-center"
                    style={{ width: "30px" }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-sm rounded-circle border bg-light fw-bold"
                    style={{ width: "32px", height: "32px" }}
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <div className="d-flex justify-content-end mt-2">
                <button
                  className="btn fw-bold rounded-pill px-3 py-1"
                  onClick={() => removeFromCart(item._id)}
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

        {/* Right Section - Summary & Shipping Form */}
        <div className="col-md-4">
          <div className="p-4 border rounded">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p className="text-muted mb-2">
              Estimated Delivery: <span className="fw-semibold">3-5 days</span>
            </p>
            <p className="text-muted mb-2">
              Items: <span className="fw-semibold">{cartItems.length}</span>
            </p>
            <h6 className="mt-3">Total: ₹{total}</h6>

            <h6 className="mt-4">Shipping Info</h6>
            <form>
              {["name", "email", "address", "city", "postalCode", "phone"].map(
                (field) => (
                  <div className="mb-2" key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      className="form-control"
                      value={shippingInfo[field]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )
              )}
            </form>

            <button
              className="btn rounded-pill mt-3 w-100"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                border: "none",
              }}
              onClick={handlePlaceOrder}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
