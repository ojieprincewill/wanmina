import React from "react";
import "./about-us.styles.scss";

const About = () => {
  const aboutImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image8.jpg?raw=true";
  return (
    <div className="about-container">
      <div className="about-text-cont">
        <p className="about-header">about wanmina</p>
        <p className="about-text">
          Wanmina is a marketing firm that specializes in web3 and tech
          marketing. We are a team of highly skilled and experienced marketing
          and tech professionals who have made this industry our home because we
          believe it is the future. We are passionate about providing value and
          enabling growth, so you can trust us to make an impact. Wanmina is
          also a community of defi experts who share value, support each other,
          and contribute to the Web3 ecosystem. We grow our community through
          our academy, where we teach people about Defi, and our DAO, which has
          partnered with a number of other Defi communities to help people
          develop their skills in Defi. We give them learning tools and new job
          opportunities to build experience and income for them.
        </p>
        <button className="contact-btn">contact us</button>
      </div>
      <div className="about-image-cont">
        <img
          src={aboutImage}
          alt="about-illustration"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
