import React from "react";
import "./service-community-section.styles.scss";
import Marquee from "../marquee/marquee.component";
import OurServices from "../our-services-hero/our-services.component";
import Community from "../community-hero/community.component";

const ServiceCommunity = () => {
  return (
    <>
      <Marquee />
      <OurServices />
      <Community />
    </>
  );
};

export default ServiceCommunity;
