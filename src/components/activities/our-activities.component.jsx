import React from "react";
import "./our-activities.styles.scss";

const OurActivities = () => {
  const activityImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image6.jpg?raw=true";
  return (
    <div className="activity-container">
      <div className="activity-text-cont">
        <p className="activity-header">Our Activities</p>
        <p className="activity-text">
          Wanmina Decentralized Finance Education Class was a free to learn
          course held by Wanmina. It was targeted at newbies in order to teach
          and show them more opportunities in the web3 space. We had over 31,000
          applications and selected 794 participants for the class. The course
          featured a series of live video classes, learning materials, and
          elaborate recordings, all created by Wanmina and their tutors. So many
          attendees from the class have been able to monetize their knowledge,
          earning millions of naira within months of applying. If you want to
          get updated on our next class, sign up for our newsletter.
        </p>
        <button className="contact-btn">contact us</button>
      </div>
      <div className="activity-image-cont">
        <img src={activityImage} alt="activity" className="activity-image" />
      </div>
    </div>
  );
};

export default OurActivities;
