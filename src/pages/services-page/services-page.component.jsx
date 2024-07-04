import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import OurServices from "../../components/our-services-hero/our-services.component";
import WorkProcess from "../../components/work-process/work-process.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const ServicesPage = () => {
  return (
    <>
      <Navigation />
      <OurServices />
      <WorkProcess />
      <FooterSection />
    </>
  );
};

export default ServicesPage;
