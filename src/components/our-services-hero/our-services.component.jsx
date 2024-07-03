import React from "react";
import "./our-services.styles.scss";
import { SERVICES_DATA } from "../../assets/services-data/services.data";

const OurServices = () => {
  const serviceData = SERVICES_DATA;
  return (
    <div className="our-services-cont">
      <p className="services-header">
        our <span className="colored">services</span> includes
      </p>
      <div className="services-grid">
        {serviceData.map((data, id) => (
          <div className="service-card" key={id}>
            <div className="services-image-cont">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="service-image"
              />
            </div>
            <p className="service-title">{data.title}</p>
            {data.subTitles.map((subtitle) => (
              <div className="subtitles-cont">
                <span className="subtitle">{subtitle}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
