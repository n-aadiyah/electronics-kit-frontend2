// src/context/CartContext.js

import React, { createContext, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

   const navigate = useNavigate();

const addToCart = (product, quantity = 1) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.warn("🔐 Please login to add products to cart");
      navigate("/auth");
      return;
    }   
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

    toast.success("🛒 Product added to cart!");
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
     toast.error("🗑️ Product removed from cart");
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(productId);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
const clearCart = () => {
    setCartItems([]);
    toast("🧹 Cart cleared!");
  };
  const toggleModal = () => setShowModal((prev) => !prev);

 const isInCart = (productId) => {
    return cartItems.some((item) => item.productId === productId);
  };

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
        isInCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
