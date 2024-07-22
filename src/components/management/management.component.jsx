import React from "react";
import "./management.styles.scss";

const Management = () => {
  const managementData = [
    {
      header: "Community Management",
      headerQoute: `“A healthy project needs a healthy community.”`,
      headerText:
        "It is important for your audience to feel connected to your brand. Wanmina can help you build and manage a healthy community free of toxicity and brimming with activity. Building you a community for life.",
      content: [
        {
          title: "Social Media Management",
          text: "We can manage your social media communities to ensure the consistent release of content, replying to comments, and handling all necessary public relations duties. we also curb misinformation, educate your users, and help you control the narrative of your project.",
          managementImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image9.jpg?raw=true",
        },
        {
          title: "Community Staffing",
          text: "Our elite community staff is at your service. With highly skilled personnel like moderators, collaboration managers, and administrators, We offer premium services like 24/7 moderation and community collaboration. We'll keep your community safe, positive, and productive. Let us take care of your community so you can take care of your business.",
          managementImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image15.jpg?raw=true",
        },
        {
          title: "Automated Community Moderation & Security",
          text: "We use bots to guard your community. They work tirelessly to keep your community safe and welcoming, flagging and quarantining bad behavior as soon as it appears. They also secure your community platforms from malicious attacks, so you can focus on building a thriving community.",
          managementImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image10.jpg?raw=true",
        },
        {
          title: "Community Growth",
          text: "Let us help you build a thriving community of engaged and dedicated members. With our experience and connections in the space, we can target contributors and community loyalists to build you a platform with long-term active members. We will work with you to create a community that is aligned with your goals and values.",
          managementImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image16.jpg?raw=true",
        },
      ],
    },
  ];
  return (
    <div className="management-container">
      {managementData.map((data, index) => (
        <div key={index}>
          <div className="management-header-container">
            <p className="management-header">{data.header}</p>
            <p className="management-quote">{data.headerQuote}</p>
            <p className="management-header-text">{data.headerText}</p>
          </div>

          {data.content.map((content, index) => (
            <div
              className={`management-grid ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
            >
              <div className="management-text-cont">
                <p className="management-title">{content.title}</p>
                <p className="management-text">{content.text}</p>
              </div>
              <div className="management-image-cont">
                <img
                  src={content.managementImage}
                  alt={content.title}
                  className="management-image"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Management;
