import React from "react";
import "./footer-section.styles.scss";
import { FOOTER_DATA } from "../../assets/footer-data/footer.data";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const footerData = FOOTER_DATA;
  const logoUrl =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image11.png?raw=true";

  return (
    <div className="footer-section">
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="logo-container"
      >
        <img src={logoUrl} alt="wanmina-logo" className="logo" />
      </Link>
      {footerData.map((data, id) => (
        <div key={id} className="segment">
          <p className="segment-title">{data.title}</p>
          <div className="segment-links">
            {data.links.map((data, index) => (
              <Link
                to={data.target}
                key={index}
                onClick={() => window.scrollTo(0, 0)}
                className="segment-link"
              >
                <span>{data.text}</span>
              </Link>
            ))}
            <div className="social-icons-cont">
              {data.socialIcons.map((data, index) => (
                <Link to={data.iconTarget} key={index}>
                  <span className="social-icon">{data.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterSection;
