import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartModalContent = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h5 className="mb-3">Your Cart</h5>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-2 p-2">
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "60px", height: "60px", marginRight: "12px" }}
                />
                <div>
                  <h6>{item.name}</h6>
                  <p className="mb-1">₹{item.price}</p>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h6>Total: ₹{total}</h6>
        </>
      )}
    </div>
  );
};
export default CartModalContent;
