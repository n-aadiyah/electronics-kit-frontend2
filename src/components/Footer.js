// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 text-center ">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-0">
          <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
          <Link to="/about" className="text-light text-decoration-none">About</Link>
          <Link to="/support" className="text-light text-decoration-none">Help & Support</Link>
          <Link to="/customer-service" className="text-light text-decoration-none">Customer Service</Link>
        </div>
        <p className="mb-0 small">© 2025 Electronics Kit. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;


