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
        const res = await axios.get(`${BASE_URL}/api/stemkits`); // Corrected endpoint
        setKits(res.data);
      } catch (err) {
        console.error("Error fetching STEM kits:", err);
      }
    };
    fetchKits();
  }, []);

  const handleSubscribe = (kit, subscription) => {
    // Add selected subscription to cart
    addToCart({ ...kit, selectedSubscription: subscription });
    navigate("/stemkit-checkout", { state: { selectedKit: kit, selectedSubscription: subscription } });
  };

  return (
    <div className="container mt-5 py-5">
      <h2 className="mb-4 text-center">Monthly STEM Kit</h2>

      {kits.map((kit) => (
        <div
          key={kit._id}
          className="card mx-auto mb-5"
          style={{ maxWidth: "600px" }}
        >
          <img
            src={kit.image}
            className="card-img-top"
            alt={kit.name}
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{kit.name}</h5>
            <p className="card-text">{kit.description}</p>

            <h6 className="mt-3">Subscription Plans:</h6>
            <ul className="list-group mb-3">
              {kit.subscriptions.map((sub, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{sub.type}</span>
                  <span>₹{sub.price}</span>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleSubscribe(kit, sub)}
                  >
                    Subscribe Now
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StemKitPage;
