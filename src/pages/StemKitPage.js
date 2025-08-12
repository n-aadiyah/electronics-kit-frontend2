import React from "react";
import "./StemKitPage.css";

const StemKitPage = () => {
  return (
    <div className="stemkit-page">
      {/* Fullscreen Image */}
      <div className="stemkit-image-container">
        <img
          src="/images/stem-explorer-kit.jpg"
          alt="STEM Explorer Kit"
          className="stemkit-image"
        />
      </div>
    </div>
  );
};

export default StemKitPage;
