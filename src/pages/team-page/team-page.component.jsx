import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import Academy from "../../components/academy/academy.component";
import OurActivities from "../../components/activities/our-activities.component";
import Agneepath from "../../components/agneepath/agneepath.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const TeamPage = () => {
  return (
    <>
      <Navigation />
      <Academy />
      <OurActivities />
      <Agneepath />
      <FooterSection />
    </>
  );
};

export default TeamPage;
