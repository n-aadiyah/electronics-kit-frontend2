import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, clearCart } = useContext(CartContext);
  const buyNowProduct = location.state?.buyNowProduct;

  const [quantity, setQuantity] = useState(buyNowProduct?.quantity || 1);
  const [subtotal, setSubtotal] = useState(0);

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  useEffect(() => {
    if (buyNowProduct) {
      setSubtotal(buyNowProduct.price * quantity);
    } else {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setSubtotal(total);
    }
  }, [quantity, buyNowProduct, cartItems]);

  const handleChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail") || "guest@example.com";

    const items = buyNowProduct
      ? [
          {
            productId: buyNowProduct._id || buyNowProduct.productId,
            quantity,
          },
        ]
      : cartItems.map((item) => ({
          productId: item._id || item.productId,
          quantity: item.quantity,
        }));

    const validItems = items.filter(
      (item) => item.productId && item.quantity > 0
    );

    if (validItems.length === 0) {
      alert("❌ No valid items to place order.");
      return;
    }

    const orderData = {
      items: validItems,
      totalAmount: subtotal,
      shippingInfo: {
        name: shippingDetails.name,
        email,
        address: shippingDetails.address,
        city: shippingDetails.city,
        postalCode: shippingDetails.postalCode,
        phone: shippingDetails.phone,
      },
    };

    try {
      const res = await fetch(`${BASE_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Order placed successfully!");
        if (!buyNowProduct) clearCart();
        navigate("/MyOrdersPage");
      } else {
        alert("❌ Failed to place order: " + data.message);
      }
    } catch (err) {
      alert("❌ Network error: " + err.message);
    }
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const productsToCheckout = buyNowProduct
    ? [{ ...buyNowProduct, quantity }]
    : cartItems;

  return (
    <div className="container my-5" style={{ marginTop: "80px" }}>
      <div className="row">
        {/* Shipping Form */}
        <div className="col-lg-8 col-md-8 mb-4">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-4">Shipping Information</h4>

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

        {/* Order Summary */}
        <div className="col-md-4 mt-5 mt-md-0">
          <h5 className="mb-3">Order Summary</h5>
          {productsToCheckout.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            <>
              {productsToCheckout.map((item, index) => (
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
                    <p className="mb-0 fw-medium">
                      {item.title || item.name}
                    </p>
                    {buyNowProduct ? (
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
                    ) : (
                      <small className="text-muted">
                        Quantity: {item.quantity}
                      </small>
                    )}
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
              <div className="d-flex justify-content-between fw-bold py-1">
                <span>Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

