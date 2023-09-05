import React from "react";
import "./ErrorMessage.css";
import errorIcon from "./error.png"; // Import the error icon image

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="error-modal">
      <div className="error-content">
        <img src={errorIcon} alt="Error" className="error-icon" />
        <p className="error-text">{message}</p>
        <button className="error-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
