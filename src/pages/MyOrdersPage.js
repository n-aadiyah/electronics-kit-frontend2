import React, { useEffect, useState } from "react";
const BASE_URL = process.env.REACT_APP_API_URL;

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You must be logged in to view your orders.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/api/orders/myorders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(data);
        } else {
          setError(data.message || "Failed to load orders.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
        <div className="text-muted">Loading your orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <div className="text-center border rounded p-4 shadow-sm" style={{ maxWidth: "400px" }}>
          <h5 className="text-danger mb-3">Oops!</h5>
          <p className="text-muted mb-3">{error}</p>
          {error.toLowerCase().includes("login") && (
            <a href="/auth" className="btn btn-primary btn-sm px-4">
              Login
            </a>
          )}
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <div className="text-center text-muted">
          <h3>🛍️ No Orders Yet</h3>
          <p>Looks like you haven't placed any orders yet.</p>
          <a href="/products" className="btn btn-outline-primary btn-sm mt-2">
            Start Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-6">
      <h3 className="mb-4">My Orders</h3>
      {orders.map((order) => (
        <div key={order._id} className="card mb-4 p-3 shadow-sm">
          <div className="d-flex justify-content-between flex-wrap">
            <div><strong>Order ID:</strong> {order._id}</div>
            <div><strong>Placed:</strong> {new Date(order.orderedAt).toLocaleString()}</div>
          </div>

          <hr />

          <div className="row">
            {order.items.map((item) => (
              <div key={item._id} className="col-md-4 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={`/${item.productId.image}`}
                    alt={item.productId.name || item.productId.title}
                    className="img-fluid rounded"
                    style={{ width: "64px", height: "64px", objectFit: "cover" }}
                    onError={(e) => (e.target.src = "/images/no-image.png")}
                  />
                  <div>
                    <div className="fw-bold">{item.productId.name}</div>
                    <small className="text-muted">Qty: {item.quantity}</small><br />
                    <small>₹{item.productId.price}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div>
            <p className="mb-1">
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>
            <p className="mb-0">
              <strong>Shipping:</strong> {order.shippingInfo.name},{" "}
              {order.shippingInfo.address}, {order.shippingInfo.city} -{" "}
              {order.shippingInfo.postalCode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
