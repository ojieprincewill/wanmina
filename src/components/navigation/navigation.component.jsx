import React from "react";
import "./navigation.styles.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const logoUrl =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image11.png?raw=true";

  return (
    <div className="navigation">
      <Link to="/" className="logo-container">
        <img src={logoUrl} alt="wanmina-logo" className="logo" />
      </Link>

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
            location.pathname === "/activities" ? "active-navlink" : ""
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
