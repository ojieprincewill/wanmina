import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import ServiceDetails from "../../components/service-details/service-details.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const ServiceDetailsPage = () => {
  return (
    <>
      <Navigation />
      <ServiceDetails />
      <FooterSection />
    </>
  );
};

export default ServiceDetailsPage;
