import React from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navlinks">
        <span className="navlink">Home</span>
        <span className="navlink">About us</span>
        <span className="navlink">Services</span>
        <span className="navlink">Team</span>
        <span className="navlink">FAQ</span>
      </div>
      <div className="cta-btn">
        <button className="contact-btn">contact us</button>
      </div>
    </div>
  );
};

export default Navigation;
