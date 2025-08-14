import React from "react";
import { useNavigate } from "react-router-dom";
import "./StemKitPage.css";

const StemKitPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/stemkit-details");
  };

  return (
    <div className="stemkit-page">

      {/* Foreground content */}
      <div className="stemkit-image-container">
        <img
          src="/images/stem-explorer-kit.jpg"
          alt="STEM Explorer Kit"
          className="stemkit-image"
        />
        <button
          className="view-details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default StemKitPage;
