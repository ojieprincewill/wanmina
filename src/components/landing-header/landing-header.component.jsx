import React from "react";
import "./landing-header.styles.scss";
import { IoGlobeOutline } from "react-icons/io5";

const LandingHeader = () => {
  return (
    <div className="header">
      <p className="main-text">
        Web3 Unleashed, <br />
        Transforming Visions to <span className="colored">Reality</span>
      </p>

      <p className="sub-text">
        We offer top class solutions in Web3 Marketing and Design, giving you
        the leading edge in your field'.
      </p>
      <div className="cta-btn-2">
        <button className="discord-btn">
          <IoGlobeOutline className="disc-icon" />
          join community
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
