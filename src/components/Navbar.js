import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

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
    <header
      className="px-3 py-2  fixed-top"
      style={{
        backgroundColor: "#48AAAD", // teal-green background
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
         <img
  src="images/logo.png"
  alt="Logo"
  className="navbar-logo"
/>

        </Link>

        {/* Navigation Links */}
        <nav className="d-flex gap-3 align-items-center">
          {location.pathname !== "/" && (
            <Link
              className="nav-link text-white fw-semibold d-flex align-items-center gap-1"
              style={{ fontSize: "1.3rem" }}
              to="/"
            >
              <i className="bi bi-house-door"></i> <span>Home</span>
            </Link>
          )}
          <Link
            className="nav-link text-white fw-semibold d-flex align-items-center gap-1"
            style={{ fontSize: "1.3rem" }}
            to="/products"
          >
            <i className="bi bi-bag-heart"></i> <span>Shop</span>
          </Link>
          <Link
            className="nav-link text-white fw-semibold d-flex align-items-center gap-1" style={{ fontSize: "1.3rem" }}
            to="/myorders"
          >
            <i className="bi bi-box-fill"></i> <span>Orders</span>
          </Link>
          <Link
            to="/viewcart"
            className="nav-link text-white fw-semibold d-flex align-items-center gap-1"
            style={{ fontSize: "1.3rem" }}
          >
            🛒 Basket
          </Link>

          {/* Auth Section */}
          {user ? (
            <>
              <span className="fw-bold text-light" style={{ fontSize: "1.3rem", borderRadius: "8px" }}>
                hi👋 , {user.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-light fw-bold text-dark" style={{ fontSize: "1.3rem", borderRadius: "8px" }}
              >
                <i className="bi bi-toggle2-off"></i> <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              className="btn btn-warning fw-bold text-dark" style={{ fontSize: "1.3rem", borderRadius: "8px" }}
              to="/auth"
            >
              <i className="bi bi-person-check"></i> <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
