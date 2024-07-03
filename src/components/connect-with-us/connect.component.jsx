import React from "react";
import "./connect.styles.scss";

const Connect = () => {
  return (
    <div className="connect-container">
      <p className="connect-title">Connect with Us</p>
      <p className="connect-text">
        Subscribe to monthly newsletter and stay updated on major developments
        about Wanmina.
      </p>
      <div className="form-cont">
        <div className="form-input">
          <input
            type="text"
            placeholder="ireoluwadavid@gmail.com"
            className="connect-input"
          />
        </div>
        <button className="sub-btn">subscribe</button>
      </div>
    </div>
  );
};

export default Connect;
