import React from "react";
import "./work-process.styles.scss";

const WorkProcess = () => {
  const workImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image32.jpg?raw=true";

  return (
    <div className="work-container">
      <div className="work-text-cont">
        <p className="work-header">our work process</p>
        <p className="work-text">
          Here at Wanmina, we aim to please. To facilitate this, we make it our
          top priority to understand your product and vision. We dedicate time
          and effort to understanding the inner workings of your product. This
          is very crucial in projecting your vision to your audience.
        </p>
        <p className="work-text">
          After getting to know your product, we will draw out a detailed plan
          for communicating it to the right audience. We customize this plan
          according to the type of audience you need and the kind of project
          you’re building. This plan would include a detailed marketing
          strategy, design suggestions, and platform maximization.
        </p>
        <p className="work-text">
          We also have the skills on hand to implement this plan. We are staffed
          with an array of influencers, designers, content creators, and
          developers who join us in communicating your vision.
        </p>
        <p className="work-text">
          We communicate your dream. If that sounds like something you want,
          contact us.
        </p>
        <button className="contact-btn">contact us</button>
      </div>
      <div className="work-image-cont">
        <img src={workImage} alt="work-illustration" className="work-image" />
      </div>
    </div>
  );
};

export default WorkProcess;
