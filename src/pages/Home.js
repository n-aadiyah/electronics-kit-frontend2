// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div style={{ paddingTop: "30px", width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <div className="home-root" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
       {/* Hero Section */}
<main className="container py-5">
  <section className="mb-5">
    <div
      className="rounded d-flex align-items-center justify-content-center text-center p-1"
      style={{
        minHeight: "350px",
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        color: "#fff",
      }}
    >
      <div className="col-lg-10">
        <h1 className="display-5 fw-bold mb-3">Elevate Your Tech</h1>
        <p className="lead">
          Discover the latest trends and timeless classics in electronics.
        </p>
        <Link to="/products" className="btn shopnow-btn fw-bold px-4 py-2 mt-3">
          Shop Now
        </Link>
      </div>
    </div>
  </section>
          {/* Why Choose Us */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4 text-center">Why Choose Us?</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="fw-bold mb-2">🚚 Fast Delivery</h5>
                  <p className="text-muted mb-0">Quick and reliable shipping to your door.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="fw-bold mb-2">💡 Quality Kits</h5>
                  <p className="text-muted mb-0">Premium components and tested designs.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="fw-bold mb-2">📞 24/7 Support</h5>
                  <p className="text-muted mb-0">Expert guidance when you need it most.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Home;


