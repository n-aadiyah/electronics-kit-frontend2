import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./Navbar.css";  // Import the navbar CSS

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
    toast.info("👋 You have been logged out.");
  };

  return (
    <header className="navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <img src="images/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="d-flex gap-3 align-items-center">
          {location.pathname !== "/" && (
            <Link
              className="nav-link text-white fw-semibold d-flex align-items-center gap-2"
              style={{ fontSize: "1.3rem" }}
              to="/"
            >
              <i className="bi bi-house-door"></i> <span>Home</span>
            </Link>
          )}
          <Link
            className="nav-link text-white fw-semibold d-flex align-items-center gap-2"
            style={{ fontSize: "1.3rem" }}
            to="/products"
          >
            <i className="bi bi-bag-heart"></i> <span>Shop</span>
          </Link>
          <Link
            className="nav-link text-white fw-semibold d-flex align-items-center gap-2"
            style={{ fontSize: "1.3rem" }}
            to="/myorders"
          >
            <i className="bi bi-box-fill"></i> <span>Orders</span>
          </Link>
          <Link
            to="/viewcart"
            className="nav-link text-white fw-semibold d-flex align-items-center gap-2"
            style={{ fontSize: "1.3rem" }}
          >
            🛒 Basket
          </Link>

          {/* Auth Section */}
          {user ? (
            <span
              className="fw-bold text-light d-flex align-items-center gap-2"
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={handleLogout}
            >
              <i className="bi bi-toggle2-off"></i> Logout
            </span>
          ) : (
            <Link
              className="nav-link text-white fw-semibold d-flex align-items-center gap-2"
              style={{ fontSize: "1.3rem" }}
              to="/auth"
            >
              <i className="bi bi-person-check"></i> Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
