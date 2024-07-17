import React from "react";
import "./choose-us.styles.scss";

const Choose = () => {
  const chooseImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image4.png?raw=true";
  return (
    <div className="choose-container">
      <div className="choose-image-cont">
        <img
          src={chooseImage}
          alt="choose-illustration"
          className="choose-image"
        />
      </div>
      <div className="choose-text-cont">
        <p className="choose-header">why choose wanmina</p>
        <p className="choose-text">
          Wanmina provides exceptional services with unmatched quality. However,
          our most unique quality is our dedication to customer satisfaction. We
          will go above and beyond to ensure that our partners achieve their
          desired results and provide their platform with everything it needs to
          grow. We are committed to providing the best possible service and
          support to our partners, and we are confident that we can help them
          achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default Choose;
