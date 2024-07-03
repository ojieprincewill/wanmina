import React from "react";
import "./landing-header.styles.scss";
import { FaDiscord } from "react-icons/fa6";

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
          <FaDiscord className="disc-icon" />
          join community
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
