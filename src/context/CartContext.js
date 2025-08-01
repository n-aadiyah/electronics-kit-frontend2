import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false); // 👈 for modal visibility

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });

    setShowModal(true); // 👈 open modal after adding
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleModal = () => setShowModal((prev) => !prev); // 👈 optional toggler

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        showModal,
        setShowModal,
        toggleModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
