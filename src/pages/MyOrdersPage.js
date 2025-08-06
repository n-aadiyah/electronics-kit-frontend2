import React, { useEffect, useState } from "react";

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
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <h5 className="text-muted">Loading orders...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <h5 className="text-danger text-center">{error}</h5>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <div className="text-center text-muted">
          <h3>🛍️ No orders found</h3>
          <p>Start shopping and place your first order!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">My Orders</h3>
      {orders.map((order) => (
        <div key={order._id} className="card mb-4 p-3 shadow-sm">
          <h5>Order ID: {order._id}</h5>
          <p>Ordered At: {new Date(order.orderedAt).toLocaleString()}</p>

          <div className="row">
            {order.items.map((item) => (
              <div key={item._id} className="col-md-4 mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    width="64"
                    height="64"
                    className="me-3 rounded"
                  />
                  <div>
                    <p className="mb-1 fw-bold">{item.productId.name}</p>
                    <p className="mb-0">Qty: {item.quantity}</p>
                    <p className="mb-0">₹{item.productId.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>
          <p>
            <strong>Shipping To:</strong> {order.shippingInfo.name},{" "}
            {order.shippingInfo.address}, {order.shippingInfo.city} -{" "}
            {order.shippingInfo.postalCode}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
