import React from "react";
import "./community.styles.scss";
import { Link } from "react-router-dom";

const Community = () => {
  const imageUrl =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image31.jpg?raw=true";
  return (
    <div className="community">
      <div className="agnee-image-cont">
        <img src={imageUrl} alt="agneepath" className="agnee-image" />
      </div>
      <div className="community-text-cont">
        <p className="community-title">community</p>
        <p className="community-quote">
          "Join our 10,000+ Community members in learning, earning and making an
          impact in the web3 space."
        </p>
        <p className="community-text">
          Wanmina is a community that focuses on creating and sharing
          opportunities for skilled people in the Web3 space. The community was
          built on the need to grow and connect creators, developers, and
          digital skill experts in the Web3 space. Wanmina provides a platform
          for these individuals to connect with each other, share ideas, and
          collaborate. The community offers immense networking opportunities and
          educational resources for anyone looking to develop their skills.
        </p>
        <Link to="https://linktr.ee/Wanmina?utm_source=linktree_profile_share&ltsid=4d0649dc-f224-4a16-8817-14f9feda2134">
          <button className="join-btn">join us now</button>
        </Link>
      </div>
    </div>
  );
};

export default Community;
