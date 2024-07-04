import React from "react";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navlinks">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/about" className="navlink">
          About us
        </Link>
        <Link to="/services" className="navlink">
          Services
        </Link>
        <Link to="/team" className="navlink">
          Team
        </Link>
        <Link to="/questions" className="navlink">
          FAQ
        </Link>
      </div>
      <Link to="/contact" className="cta-btn">
        <button className="contact-btn">contact us</button>
      </Link>
    </div>
  );
};

export default Navigation;
