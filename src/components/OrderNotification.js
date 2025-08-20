import React from "react";
import "./OrderNotification.css"; // ✅ include the CSS you shared

const OrderNotification = ({ message, onDismiss, onView }) => {
  return (
    <div className="notifications-container">
      <div className="success">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="succes-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="success-prompt-wrap">
            <p className="success-prompt-heading">Order completed</p>
            <div className="success-prompt-prompt">
              <p>{message}</p>
            </div>

            <div className="success-button-container">
              <button
                type="button"
                className="success-button-main"
                onClick={onView}
              >
                View status
              </button>
              <button
                type="button"
                className="success-button-secondary"
                onClick={onDismiss}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderNotification;
