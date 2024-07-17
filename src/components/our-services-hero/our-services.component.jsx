import React from "react";
import "./our-services.styles.scss";
import { SERVICES_DATA } from "../../assets/services-data/services.data";
import { Link } from "react-router-dom";

const OurServices = () => {
  const serviceData = SERVICES_DATA;
  return (
    <div className="our-services-cont">
      <p className="services-header">
        our <span className="colored">services</span> includes
      </p>
      <div className="services-grid">
        {serviceData.map((data) => (
          <div className="service-card" key={data.id}>
            <div className="services-image-cont">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="service-image"
              />
            </div>
            <Link
              to={`/services/${data.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="service-title">{data.title}</p>
            </Link>
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
