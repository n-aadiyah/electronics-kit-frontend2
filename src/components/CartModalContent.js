import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartModalContent = ({ lastAddedProductTitle }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleViewCart = () => {
    navigate("/viewcart");
  };

  return (
    <div>
      <h5 className="mb-4 fw-bold text-center text-dark">🛒 Your Cart</h5>

      {lastAddedProductTitle && (
        <div className="alert alert-success text-center py-2" role="alert">
          ✅ <strong>{lastAddedProductTitle}</strong> has been added to your cart!
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id || item.id} className="card mb-3 border-0 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-auto">
                 <img
  src={`/${product.image}`} // this resolves to /images/arduino-kit.jpg
  alt={product.name || product.title}
  className="img-fluid"
  onError={(e) => (e.target.src = "/images/no-image.png")}
/>
                </div>
                <div className="col">
                  <div className="card-body py-2">
                    <h6 className="card-title fw-semibold mb-1 text-dark">{item.title}</h6>
                    <p className="card-text small mb-1 text-secondary">
                      ₹{item.price} ×{" "}
                      <span className="badge bg-light text-dark border">{item.quantity}</span>{" "}
                      = <strong>₹{item.price * item.quantity}</strong>
                    </p>
                  </div>
                </div>
                <div className="col-auto pe-3">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => removeFromCart(item._id || item.id)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-3" />
          <div className="d-flex justify-content-between px-2 mb-3">
            <h6 className="fw-bold text-dark mb-0">Total</h6>
            <h6 className="fw-bold text-dark mb-0">₹{total}</h6>
          </div>

          <div className="text-center">
            <button
              className="btn fw-bold w-100"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
              onClick={handleViewCart}
            >
              View Full Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModalContent;
