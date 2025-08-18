import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // useAuth hook
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = process.env.REACT_APP_API_URL;

const AuthPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
     setError(null);
  };

  // ✅ Toggle between login/signup
  const toggleForm = () => {
      setFormData({ username: "", email: "", password: "" });
    setError(null);
    setIsLogin((prev) => !prev);
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? `${BASE_URL}/api/auth/login`
      : `${BASE_URL}/api/auth/register`;

    try {
      const response = await axios.post(endpoint, formData);
      console.log("✅ Auth Success:", response.data);
      if (isLogin) {
        // Normalize user data
        const user = {
          name: response.data.user?.name || response.data.user?.username || "User",
          email: response.data.user?.email,
          token: response.data.token,
        };

        login(user);
        localStorage.setItem("token", user.token);
        navigate("/");
      } else {
        alert("✅ Registered successfully! Please log in.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error("❌ Auth Error:", error);
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Authentication failed. Please try again.";
      setError(message);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column bg-white"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <main className="container mt-5 py-4 d-flex justify-content-center flex-grow-1">
        <div
          className="row w-100 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "900px" }}
        >
          <div className="col-md-7 bg-black px-5 py-4">
            <h2 className="fw-bold pb-3" style={{ color: "#81650fff" }}>
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3 text-white">
                  <label className="form-label fw-medium">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control rounded-3 p-3"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-3 text-white">
                <label className="form-label fw-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-3 p-3"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2 text-white">
                <label className="form-label fw-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-3 p-3"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {isLogin && (
                <p className="auth-forgot mt-2" style={{ color: "#81650fff" }}>
                  Forgot your password?
                </p>
              )}

              <button
                type="submit"
                className="btn rounded-pill mt-4 w-100"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                }}
              >
                {isLogin ? "Log in" : "Sign up"}
              </button>
            </form>

            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </div>

          <div className="col-md-5 bg-white d-flex flex-column justify-content-center align-items-center auth-toggle-section">
            <h4 className="fw-bold text-center">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </h4>
            <button
              className="btn rounded-pill mt-4 w-100"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                border: "none",
              }}
              onClick={toggleForm}
            >
              {isLogin ? "Create an account" : "Login here"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
