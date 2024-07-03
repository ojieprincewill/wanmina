import React from "react";
import "./value.styles.scss";

const ValueProposition = () => {
  const valueContent = [
    {
      title: "versatility",
      text: "Partnering with a web3 firm that has expertise in many aspects of the industry gives your project access to a wide range of services and consulting in every area, from product development to product management.",
      id: 1,
    },
    {
      title: "quality",
      text: "The capability of our staff and the competency of our team give the quality of our services an edge over the competition.",
      id: 2,
    },
    {
      title: "security",
      text: "Wanmina has promoted a culture of security and transparency by encouraging all staff and team members to reveal their identities and other information on the website. Those who are not comfortable with it are vetted by us and allowed to use alias.",
      id: 3,
    },
    {
      title: "experience",
      text: "This project is made up of people who are proficient in their field and are very experienced in web3. We know the ins and outs of the industry and we will deliver everything your project needs to grow.",
      id: 4,
    },
  ];
  const valueImage =
    "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image38.png?raw=true";

  return (
    <div className="value-container">
      <div className="value-border"></div>
      <div className="value-content">
        <p className="value-header">
          Unique <span className="colored">Value</span> Proposition
        </p>
        {valueContent.map((value) => (
          <div className="value-item" key={value.id}>
            <p className="title">{value.title}</p>
            <p className="text">{value.text}</p>
          </div>
        ))}
      </div>
      <div className="value-image-cont">
        <img
          src={valueImage}
          alt="value illustration"
          className="value-image"
        />
      </div>
    </div>
  );
};

export default ValueProposition;
