// src/pages/StemKitPage.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const BASE_URL = process.env.REACT_APP_API_URL;

const StemKitPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [kits, setKits] = useState([]);

  // Fetch STEM kits from backend
  useEffect(() => {
    const fetchKits = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/stemkits`);
        setKits(res.data);
      } catch (err) {
        console.error("Error fetching STEM kits:", err);
      }
    };
    fetchKits();
  }, []);

  const handleSubscribe = (kit, subscription) => {
    addToCart({ ...kit, selectedSubscription: subscription });
    navigate("/stemkit-checkout", { state: { selectedKit: kit, selectedSubscription: subscription } });
  };

  return (
    <div className="container mt-5 py-5">
<h2
  className="text-center mb-5"
  style={{
    fontFamily: 'Exo 2, sans-serif',
    fontSize: '3rem',                    // Adjust the size as needed
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '0.1em',
    wordSpacing: '0.5em',
  }}
>
  MAKLAB<span></span>
  <span style={{ color: '#ff6600' }}>STEM</span>
  EXPLORER
</h2>
      {kits.map((kit) => (
        <div key={kit._id} className="mb-5">
          {/* Kit Image */}
          <div className="text-center mb-3">
            <img
              src={kit.image}
              alt={kit.name}
              className="img-fluid rounded"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          {/* Kit Details */}
          <h4 className="text-center">{kit.name}</h4>
          <p className="text-center text-muted mb-4">{kit.description}</p>

          {/* Subscription Plans */}
          <div className="row g-3 justify-content-center">
            {kit.subscriptions.map((sub, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-3 border rounded text-center h-100">
                  <h5 className="fw-bold">{sub.type}</h5>
                  <p className="display-6 fw-bold text-dark">₹{sub.price}</p>
                  <button
                    className="btn w-100 mb-3"
                    style={{ backgroundColor: "#ff6600", color: "#fff" }}
                    onClick={() => handleSubscribe(kit, sub)}
                  >
                    Subscribe Now
                  </button>
                  <ul className="list-unstyled small text-start">
                    <li className="mb-2">
    <i className="bi bi-check-circle me-2" style={{ color: '#ff6600' }}></i>
    12 Diy stem kits 
  </li>
  <li className="mb-2">
    <i className="bi bi-check-circle me-2" style={{ color: '#ff6600' }}></i>
    12 monthly themes 
  </li>
  <li className="mb-2">
    <i className="bi bi-check-circle me-2" style={{ color: '#ff6600' }}></i>
    Online Support
  </li>
  <li className="mb-2">
    <i className="bi bi-check-circle me-2" style={{ color: '#ff6600' }}></i>
    for students of grade 5 to 12 
  </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StemKitPage;
