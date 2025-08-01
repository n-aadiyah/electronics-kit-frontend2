import React from "react";
import { Modal } from "react-bootstrap";
import CartPage from "../pages/CartPage";
const CartModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartPage />
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
