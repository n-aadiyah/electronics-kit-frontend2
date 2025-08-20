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
        // Fetch both regular and STEM kit orders
        const [resProducts, resStemKits] = await Promise.all([
          fetch(`${BASE_URL}/api/orders/myorders`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${BASE_URL}/api/stemkit-orders/myorders`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const dataProducts = await resProducts.json();
        const dataStemKits = await resStemKits.json();

        if (!resProducts.ok) throw new Error(dataProducts.message || "Failed to load product orders.");
        if (!resStemKits.ok) throw new Error(dataStemKits.message || "Failed to load STEM Kit orders.");

        // Mark types to differentiate later
        const combinedOrders = [
          ...dataProducts.map((o) => ({ ...o, type: "product" })),
          ...dataStemKits.map((o) => ({ ...o, type: "stemkit" })),
        ];

        // Sort by order date (latest first)
        combinedOrders.sort((a, b) => new Date(b.orderedAt) - new Date(a.orderedAt));

        setOrders(combinedOrders);
      } catch (err) {
        setError(err.message || "Network error. Please try again.");
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
      <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
        <div className="text-center border rounded p-3 shadow-sm" style={{ maxWidth: "400px" }}>
          <h5 className="text-danger mb-3">Oops!</h5>
          <p className="text-muted mb-3">{error}</p>
          {error.toLowerCase().includes("login") && (
            <a href="/auth" className="btn btn-primary btn-sm px-4">Login</a>
          )}
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
        <div className="text-center text-muted">
          <h3>🛍️ No Orders Yet</h3>
          <p>Looks like you haven't placed any orders yet.</p>
          <a href="/products" className="btn btn-outline-primary btn-sm mt-2">Start Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-5 mt-5">
       <h2 className="fw-bold text-dark mb-4">My Orders</h2>

      {orders.map((order) => (
        <div key={order._id} className="card mt-5 mb-5 p-4 shadow-sm">
          <div className="d-flex justify-content-between flex-wrap">
            <div><strong>Order ID:</strong> {order._id}</div>
            <div><strong>Placed:</strong> {new Date(order.orderedAt).toLocaleString()}</div>
            <div><strong>Type:</strong> {order.type === "stemkit" ? "STEM Kit" : "Product"}</div>
          </div>

          <hr />

          {order.type === "product" ? (
            <div className="row">
              {order.items.map((item) => (
                <div key={item._id} className="col-md-4 mt-3 mb-3">
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
                      <small className="text-muted">Qty: {item.quantity}</small>
                      <br />
                      <small>₹{item.productId.price}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex align-items-center mb-3">
              <img
                src={order.stemKit.image}
                alt={order.stemKit.name}
                className="rounded me-3"
                style={{ width: "64px", height: "64px", objectFit: "cover" }}
                onError={(e) => (e.target.src = "/images/no-image.png")}
              />
              <div>
                <div className="fw-bold">{order.stemKit.name}</div>
                <small className="text-muted">Subscription: {order.subscriptionType}</small>
                <br />
                <small>Price: ₹{order.price.toFixed(2)}</small>
              </div>
            </div>
          )}

          <hr />
          <div>
            <p className="mb-1">
              <strong>Shipping:</strong> {order.shippingInfo.name}, {order.shippingInfo.address}, {order.shippingInfo.city} - {order.shippingInfo.postalCode}
            </p>
            <p className="mb-0">
              <strong>Email:</strong> {order.shippingInfo.email} | <strong>Phone:</strong> {order.shippingInfo.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
