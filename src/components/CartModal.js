import React from "react";
import { Modal } from "react-bootstrap";
import CartModalContent from "./CartModalContent"; // ✅ Used below

const CartModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartModalContent />
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
