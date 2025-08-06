// src/context/CartContext.js

import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.productId === product._id);

      if (exists) {
        return prevItems.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity,
          productId: product._id, // Used internally
        },
      ];
    });

    setShowModal(true); // Show confirmation modal
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(productId);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const toggleModal = () => setShowModal((prev) => !prev);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        showModal,
        setShowModal,
        toggleModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
