import React from "react";
import "./landing-header.styles.scss";
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      <Link
        to="https://linktr.ee/Wanmina?utm_source=linktree_profile_share&ltsid=4d0649dc-f224-4a16-8817-14f9feda2134"
        className="cta-btn-2"
      >
        <button className="discord-btn">
          <IoGlobeOutline className="disc-icon" />
          join community
        </button>
      </Link>
    </div>
  );
};

export default LandingHeader;
