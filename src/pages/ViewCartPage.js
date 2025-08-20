// src/pages/ViewCartPage.js
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import OrderNotification from "../components/OrderNotification";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const ViewCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
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

  // ✅ Calculate total for both product types (Regular + Stemkit)
  const total = cartItems.reduce((sum, item) => {
    const price = item.selectedSubscription
      ? item.selectedSubscription.price
      : item.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to place an order.");
      return navigate("/login");
    }

    try {
      let results = [];

      // ✅ 1. Place Regular Product Orders
      const regularOrders = cartItems.filter((item) => !item.selectedSubscription);
      if (regularOrders.length > 0) {
        const orderPayload = {
          items: regularOrders.map((item) => ({
            productId: item._id || item.productId,
            quantity: item.quantity,
          })),
          totalAmount: regularOrders.reduce(
            (sum, item) => sum + (item.price || 0) * item.quantity,
            0
          ),
          shippingInfo,
        };

        console.log("📦 Sending Regular Order:", orderPayload);

        const res1 = await axios.post(
          `${BASE_URL}/api/orders`,
          orderPayload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        results.push(res1.data);
      }

      // ✅ 2. Place STEM Kit Subscription Orders
      const stemkitOrders = cartItems.filter((item) => item.selectedSubscription);
      for (const kit of stemkitOrders) {
        const stemkitPayload = {
          stemKitId: kit._id,
          subscriptionType: kit.selectedSubscription.type,
          price: kit.selectedSubscription.price,
          shippingInfo,
        };

        console.log("🎁 Sending STEM Kit Order:", stemkitPayload);

        const res2 = await axios.post(
          `${BASE_URL}/api/stemkit-orders`,
          stemkitPayload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        results.push(res2.data);
      }

      if (results.length > 0) {
        clearCart();
        setNotificationMessage(
          "You're happy now? Your order is successfully placed and on its way!"
        );
        setShowNotification(true);
      } else {
        alert("⚠️ No items to order.");
      }
    } catch (error) {
      console.error("❌ Order failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Failed to place order. Try again."
      );
    }
  };

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8">
          <h2 className="fw-bold text-dark mb-4">
            Shopping Bag ({cartItems.length})
          </h2>

          {cartItems.map((item) => {
            const displayPrice = item.selectedSubscription
              ? item.selectedSubscription.price
              : item.price || 0;

            return (
              <div
                key={item._id + (item.selectedSubscription?.type || "")}
                className="bg-light p-3 rounded mb-3"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image || item.kitImage}
                      alt={item.name}
                      width="56"
                      height="56"
                      className="rounded"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/no-image.jpg";
                      }}
                    />
                    <div>
                      <p className="fw-semibold mb-1">{item.name}</p>
                      {item.selectedSubscription ? (
                        <p className="text-muted mb-0">
                          {item.selectedSubscription.type} - ₹{displayPrice}
                        </p>
                      ) : (
                        <p className="text-muted mb-0">₹{displayPrice}</p>
                      )}
                    </div>
                  </div>

                  {!item.selectedSubscription && (
                    <div className="d-flex align-items-center gap-3">
                      <button
                        className="btn btn-sm rounded-circle border bg-light fw-bold"
                        style={{ width: "32px", height: "32px" }}
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
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
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>

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
            );
          })}
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

      {/* ✅ Order Notification */}
      {showNotification && (
        <OrderNotification
          message={notificationMessage}
          onView={() => {
            setShowNotification(false);
            navigate("/MyOrders");
          }}
          onDismiss={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default ViewCartPage;
