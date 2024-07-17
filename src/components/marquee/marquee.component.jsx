import React from "react";
import "./marquee.styles.scss";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <Marquee>
      <div className="marquee">
        <p>Web3 DAO</p>
        <p>Web3 UI/UX</p>
        <p>Web3 Branding</p>
        <p>Web3 Content Writing</p>
        <p>Web3 Video Editing</p>
        <p>Web3 DAO</p>
        <p>Web3 UI/UX</p>
        <p>Web3 Branding</p>
        <p>Web3 Content Writing</p>
        <p>Web3 Video Editing</p>
      </div>
    </Marquee>
  );
};

export default MarqueeSection;
