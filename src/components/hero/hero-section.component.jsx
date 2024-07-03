import React from "react";
import "./hero-section.styles.scss";
import Navigation from "../navigation/navigation.component";
import LandingHeader from "../landing-header/landing-header.component";
import binance from "../../assets/flat-icons/binance.png";
import solana from "../../assets/flat-icons/solana.png";
import bitcoin from "../../assets/flat-icons/bitcoin.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={binance} alt="binance-icon" className="binance-token" />
      <img src={solana} alt="solana-icon" className="solana-token" />
      <img src={bitcoin} alt="bitcoin-icon" className="bitcoin-token1" />
      <img src={bitcoin} alt="bitcoin-icon" className="bitcoin-token2" />
      <Navigation />
      <LandingHeader />
    </div>
  );
};

export default Hero;
