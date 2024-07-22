import React from "react";
import "./marketing.styles.scss";

const Marketing = () => {
  const marketingData = [
    {
      header: "Marketing",
      headerQuote: `“Take your web3 marketing strategy to the next level”`,
      headerText:
        "Let wanmina help you unlock your brand’s full potential through our high-level product promotion strategies aimed at your target audience.",
      content: [
        {
          title: "Influencer Marketing",
          text: "We have a network of top influencers who are eager to promote your brand to their thousands of followers. We will handle everything from negotiating prices to creating content, ensuring you get the best value out of us.",
          marketingImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image6.jpg?raw=true",
        },
        {
          title: "Content Marketing",
          text: "We have very skilled graphic and video content creators in our ranks to produce the best content for marketing your product. We also optimize and customize the content depending on the platform in order to reach your platform audience and get the best quality.",
          marketingImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image2.jpg?raw=true",
        },
        {
          title: "Email Marketing",
          text: "We can help you directly reach your target audience through Email messages. It can enable more intimate interaction with users and serve as a follow-up tool to always remind them of your presence. We can find you the right email audience today!",
          marketingImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image12.jpg?raw=true",
        },
        {
          title: "Token Listing",
          text: "We can help you increase the visibility of your token or NFT by listing it on exchanges, marketplaces, lending protocols, etc. It also increases practicality for users to be able to conveniently exchange their tokens on some of the biggest DEXs in the space.",
          marketingImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image3.jpg?raw=true",
        },
        {
          title: "Content Writing",
          text: "We are equipped with outstanding writers who write excellent content. On everything from blogs and threads to docs and whitepapers. With us, you can be sure of top-quality writeups for whatever your project needs.",
          marketingImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image1.jpg?raw=true",
        },
      ],
    },
  ];
  return (
    <div className="marketing-container">
      {marketingData.map((data, index) => (
        <div key={index}>
          <div className="marketing-header-container">
            <p className="marketing-header">{data.header}</p>
            <p className="marketing-quote">{data.headerQuote}</p>
            <p className="marketing-header-text">{data.headerText}</p>
          </div>

          {data.content.map((content, index) => (
            <div
              className={`marketing-grid ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
            >
              <div className="marketing-text-cont">
                <p className="marketing-title">{content.title}</p>
                <p className="marketing-text">{content.text}</p>
              </div>
              <div className="marketing-image-cont">
                <img
                  src={content.marketingImage}
                  alt={content.title}
                  className="marketing-image"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marketing;
