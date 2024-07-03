import React from "react";
import Hero from "../../components/hero/hero-section.component";
import ServiceCommunity from "../../components/service-community-section/service-community-section.component";
import ValueProposition from "../../components/value-proposition/value.component";
import Connect from "../../components/connect-with-us/connect.component";
import FaqSection from "../../components/faq-section/faq-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceCommunity />
      <ValueProposition />
      <Connect />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
