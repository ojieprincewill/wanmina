import React from "react";
import "./navigation.styles.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="navigation">
      <div className="navlinks">
        <Link
          to="/"
          className={`navlink ${
            location.pathname === "/" ? "active-navlink" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`navlink ${
            location.pathname === "/about" ? "active-navlink" : ""
          }`}
        >
          About us
        </Link>
        <Link
          to="/services"
          className={`navlink ${
            location.pathname.includes("/services") && "active-navlink"
          }`}
        >
          Services
        </Link>
        <Link
          to="/activities"
          className={`navlink ${
            location.pathname === "/team" ? "active-navlink" : ""
          }`}
        >
          Activities
        </Link>
        <Link
          to="/questions"
          className={`navlink ${
            location.pathname === "/questions" ? "active-navlink" : ""
          }`}
        >
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
