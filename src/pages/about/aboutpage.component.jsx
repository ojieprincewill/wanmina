import React from "react";
import About from "../../components/about-us/about-us.component";
import Navigation from "../../components/navigation/navigation.component";
import Choose from "../../components/choose-us/choose-us.component";
import ValueProposition from "../../components/value-proposition/value.component";
import Team from "../../components/team/team.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <About />
      <Choose />
      <ValueProposition />
      <Team />
      <FooterSection />
    </>
  );
};

export default AboutPage;
