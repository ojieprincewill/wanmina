import React from "react";
import "./agneepath.styles.scss";

const Agneepath = () => {
  const agneeData = [
    {
      id: 1,
      title: "agneepath",
      text: "Wanmina was a big part of one of crypto-Africa’s biggest academy events. Nirvana’s Agneepath was a massive onboarding course held by the prestigious Nirvana Academy. It hosted over 900 paid students, teaching them from basics to expert level in DEFI and how to monetize their skills. Wanmina participated as a sponsor in the Agneepath project and presented a series of learning materials featuring a series of learning materials from Wanmina’s tutors and a live class with Wanmina’s CEO, Mako.",
      imageUrl:
        "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image31.jpg?raw=true",
    },
    {
      id: 2,
      title: "onboarding 150+ staff",
      text: "Wanmina in partnership with Nirvana, onboarded more than 150 skilled defi personnel to their staff board and was able to provide more than 50 jobs. We were able to offer earning opportunities for 50+ hard working people and a hands-on learning experience for all members of that onboarding program.",
      imageUrl:
        "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%234/image10.jpg?raw=true",
    },
  ];

  return (
    <div className="agnee-container">
      {agneeData.map((data, index) => (
        <div
          className={`agnee-grid ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="agnee-image-cont">
            <img src={data.imageUrl} alt="agneepath" className="agnee-image" />
          </div>
          <div className="agnee-text-cont">
            <p className="agnee-title">{data.title}</p>
            <p className="agnee-text">{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agneepath;
