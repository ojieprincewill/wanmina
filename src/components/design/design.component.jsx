import React from "react";
import "./design.styles.scss";

const Design = () => {
  const designData = [
    {
      header: "Design",
      headerQuote: `“We Empower Your Brand with Exceptional Design”`,
      headerText:
        "In today's competitive sphere, design is very important in order to stand out from the crowd and connect with their target audience. Let's help you build a well-designed brand identity. Let’s help you look good.",
      content: [
        {
          title: "Logo Design",
          quote: null,
          text: "Your brand's foundation lies in its logo. Our exceptional design team will be dedicated to working with you in crafting a logo that perfectly represents your brand.",
          designImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image13.jpg?raw=true",
        },
        {
          title: "Product Design",
          quote: null,
          text: "A bad product design for your digital product can be fatal. With our elite team of designers, we can take the look and interface of your App, dApp or website to a whole other level. Our efforts through design can directly improve the quality and value of your product.",
          designImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image11.jpg?raw=true",
        },
        {
          title: "NFT Art",
          quote: null,
          text: "Wanmina's design team has worked with some big names in the NFT world to create thousands of stunning, one-of-a-kind artworks. We can help you create NFTs that will capture the attention of your target audience and help you build a strong brand identity.",
          designImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image7.jpg?raw=true",
        },
        {
          title: "Banner and Profile Design",
          quote: null,
          text: "We can help you design your social profiles, giving you an attractive and consistent look across all social platforms. Helping you improve your brand look and giving you the brand identity to truly represent your ideals. Let us help you make a great first impression on social media. We'll design captivating, consistent profiles for all your social media platforms, so you can connect with your audience and build your brand. Your profiles will be tailored to your specific needs and goals, and we'll work with you to create a look that reflects your brand identity and ideals.",
          designImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image5.jpg?raw=true",
        },
      ],
    },
  ];
  return (
    <div className="design-container">
      {designData.map((data, index) => (
        <div key={index}>
          <div className="design-header-container">
            <p className="design-header">{data.header}</p>
            <p className="design-quote">{data.headerQuote}</p>
            <p className="design-header-text">{data.headerText}</p>
          </div>

          {data.content.map((content, index) => (
            <div
              className={`design-grid ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
            >
              <div className="design-text-cont">
                <p className="design-title">{content.title}</p>
                <p className="design-text">{content.text}</p>
              </div>
              <div className="design-image-cont">
                <img
                  src={content.designImage}
                  alt={content.title}
                  className="design-image"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Design;
