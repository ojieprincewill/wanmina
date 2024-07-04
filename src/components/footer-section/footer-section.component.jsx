import React from "react";
import "./footer-section.styles.scss";
import { FOOTER_DATA } from "../../assets/footer-data/footer.data";

const FooterSection = () => {
  const footerData = FOOTER_DATA;

  return (
    <div className="footer-section">
      {footerData.map((data, id) => (
        <div key={id} className="segment">
          <p className="segment-title">{data.title}</p>
          <div className="segment-links">
            {data.links.map((link, index) => (
              <span key={index} className="segment-link">
                {link}
              </span>
            ))}
            <div className="social-icons-cont">
              {data.socialIcons.map((icon, index) => (
                <span key={index} className="social-icon">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterSection;
