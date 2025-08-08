import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import context
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ Use context

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ If you’re storing a token
    logout(); // ✅ Clear user context
    navigate("/"); // ✅ Redirect
toast.info("👋 You have been logged out.");

  };

  return (
    <header className="px-3 py-2 border-bottom bg-white shadow-sm fixed-top">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="/electronova.png"
            alt="Logo"
            style={{
              width: "90px",
              height: "110px",
              objectFit: "contain",
            }}
          />
          <div>
            <h2
              className="fw-bold mb-1"
              style={{
                fontSize: "1.8rem",
                background: "linear-gradient(to right, green, black)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ElectroNova
            </h2>
            <p
              className="mb-0"
              style={{
                fontSize: "0.9rem",
                background:
                  "linear-gradient(to right, #000000, #8B4513, #006400)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Kit. Every Idea. Wired Right.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="d-flex gap-4 align-items-center">
          {location.pathname !== "/" && (
            <Link
              className="nav-link-custom d-flex align-items-center gap-1"
              to="/"
            >
              <i className="bi bi-house-door"></i> <span>Home</span>
            </Link>
          )}
          <Link
            className="nav-link-custom d-flex align-items-center gap-1"
            to="/products"
          >
            <i className="bi bi-bag-heart"></i> <span>Shop</span>
          </Link>
          <Link
            className="nav-link-custom d-flex align-items-center gap-1"
            to="/myorders"
          >
            <i className="bi bi-bag"></i> <span>Orders</span>
          </Link>
          <Link
            to="/viewcart"
            className="nav-link-custom d-flex align-items-center gap-1"
          >
            🛒 Basket
          </Link>

          {/* Auth Section */}
          {user ? (
            <>
              <span className="fw-bold text-success">
                hi👋 , {user.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="btn my-account-btn fw-bold"
              >
                <i className="bi bi-box-arrow-right"></i> <span>Logout</span>
              </button>
            </>
          ) : (
            <Link className="btn my-account-btn fw-bold" to="/auth">
              <i className="bi bi-person-check"></i> <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
