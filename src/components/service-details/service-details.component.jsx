import React from "react";
import "./service-details.styles.scss";
import { useParams, Link } from "react-router-dom";
import { SERVICES_DATA } from "../../assets/services-data/services.data";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const serviceData = SERVICES_DATA;
  const selected = serviceData.find((data) => data.id === Number(serviceId));
  const { details, title } = selected;

  return (
    <>
      <div className="breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Home <span className="arrow">{">"}</span>
        </Link>{" "}
        <Link
          to="/services"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Services <span className="arrow">{">"}</span>
        </Link>
        <span className="breadtitle">{title}</span>
      </div>
      <div>{details}</div>
    </>
  );
};

export default ServiceDetails;
