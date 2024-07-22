import React from "react";
import "./team.styles.scss";
import { TEAM_DATA } from "../../assets/team-data/team.data";
import { Link } from "react-router-dom";

const Team = () => {
  const teamData = TEAM_DATA;
  return (
    <div className="team-container">
      <p className="team-header">
        our <span className="colored">team</span>
      </p>
      <div className="card-container">
        {teamData.slice(0, 3).map((data, id) => (
          <div className="team-card" key={id}>
            <div className="team-image-cont">
              <img src={data.image} alt={data.name} className="team-image" />
              <div className="socials-overlay">
                <Link to={data.xLink}>
                  <span className="social-icon">{data.twitter}</span>
                </Link>
                <Link to={data.yLink}>
                  <span className="social-icon">{data.linkedin}</span>
                </Link>
              </div>
            </div>
            <p className="title">{data.jobTitle}</p>
            <p className="text">{data.name}</p>
          </div>
        ))}
      </div>
      <div className="sliced">
        {teamData.slice(3, 5).map((data, id) => (
          <div className="team-card" key={id}>
            <div className="team-image-cont">
              <img src={data.image} alt={data.name} className="team-image" />
              <div className="socials-overlay">
                <Link to={data.xLink}>
                  <span className="social-icon">{data.twitter}</span>
                </Link>
                <Link to={data.yLink}>
                  <span className="social-icon">{data.linkedin}</span>
                </Link>
              </div>
            </div>
            <p className="title">{data.jobTitle}</p>
            <p className="text">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
