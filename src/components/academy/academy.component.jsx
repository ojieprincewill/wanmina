import React from "react";
import "./academy.styles.scss";

const Academy = () => {
  const academyImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image32.jpg?raw=true";
  return (
    <div className="academy-container">
      <div className="academy-text-cont">
        <p className="academy-header">Wanmina Academy and DAO</p>
        <p className="academy-text">
          Wanmina’s Academy trains people with ambitions in Web3 on the basics
          and technicalities of the space. We also train people with digital
          skills who want to enter the Web3 space for employment. Teach them how
          the market works, the demand for their niche, and how to approach
          monetization in the industry. The Wanmina Academy only accepts
          students from time to time, so sign up for the Wanmina newsletter to
          get updated.
        </p>
        <p className="academy-text">
          Wanmina’s DAO is a partnership organization that reaches out to other
          communities to share knowledge, identify skilled individuals, and
          create opportunities for others. This is done to expand the Wanmina
          community with talent.
        </p>
        <button className="contact-btn">contact us</button>
      </div>
      <div className="academy-image-cont">
        <img src={academyImage} alt="academy" className="academy-image" />
      </div>
    </div>
  );
};

export default Academy;
