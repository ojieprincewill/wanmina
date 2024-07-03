import React from "react";
import "./footer-section.styles.scss";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="segment">
        <p className="segment-title">get started</p>
        <div className="segment-links">
          <span className="segment-link">Contact Us</span>
          <span className="segment-link">Socials</span>
          <span className="segment-link">Email Us</span>
          <span className="segment-link">Make Inquiries</span>
          <span className="segment-link">Events</span>
        </div>
      </div>
      <div className="segment">
        <p className="segment-title">company</p>
        <div className="segment-links">
          <span className="segment-link">Affiliate Communities</span>
          <span className="segment-link">Publication</span>
          <span className="segment-link">About Us</span>
          <span className="segment-link">FAQ</span>
        </div>
      </div>
      <div className="segment">
        <p className="segment-title">social media</p>
        <div className="segment-links">
          <span className="segment-link">Twitter</span>
          <span className="segment-link">Telegram</span>
          <span className="segment-link">Discord</span>
          <span className="segment-link">LinkedIn</span>

          <div className="social-icons-cont">
            <span className="social-icon">
              <IoLogoTwitter />
            </span>
            <span className="social-icon">
              <IoLogoInstagram />
            </span>
            <span className="social-icon">
              <IoLogoLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
