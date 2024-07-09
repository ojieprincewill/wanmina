import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import OurServices from "../../components/our-services-hero/our-services.component";
import WorkProcess from "../../components/work-process/work-process.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import Development from "../../components/development/development.component";
import Design from "../../components/design/design.component";
import Management from "../../components/management/management.component";
import Marketing from "../../components/marketing/marketing.component";

const ServicesPage = () => {
  return (
    <>
      <Navigation />
      <OurServices />
      <WorkProcess />
      <Development />
      <Design />
      <Management />
      <Marketing />
      <FooterSection />
    </>
  );
};

export default ServicesPage;
