import React from "react";
import "./development.styles.scss";

const Development = () => {
  const devData = [
    {
      header: "Web Development",
      headerQuote: `“Let's build you a digital masterpiece”`,
      headerText:
        "The Wanmina web development team can build you a beautiful website for your business and facilitate your tech needs.",
      content: [
        {
          title: "Website Development",
          quote: null,
          text: "Build a jaw-dropping website with us to give users an amazing first impression. We will make sure your brand’s identity is reflected perfectly on your website",
          devImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image37.jpg?raw=true",
        },
        {
          title: "Ui/Ux Design",
          quote: null,
          text: "We will keep users hooked on your site through amazing user interface and user experience tools. We will make sure you have an amazing brand look and keep your users coming back",
          devImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image14.jpg?raw=true",
        },
        {
          title: "Website Security",
          quote: null,
          text: "Don't let a data breach ruin your business. Protect your website with our comprehensive security services, including SSL, security plugins, and frequent site updates. We'll keep your users' data safe and secure, so you can focus on running your business.",
          devImage:
            "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%232/image4.jpg?raw=true",
        },
      ],
    },
  ];
  return (
    <div className="dev-container">
      {devData.map((data, index) => (
        <div key={index}>
          <div className="dev-header-container">
            <p className="dev-header">{data.header}</p>
            <p className="dev-quote">{data.headerQuote}</p>
            <p className="dev-header-text">{data.headerText}</p>
          </div>

          {data.content.map((content, index) => (
            <div
              className={`dev-grid ${index % 2 === 1 ? "reverse" : ""}`}
              key={index}
            >
              <div className="dev-text-cont">
                <p className="dev-title">{content.title}</p>
                <p className="dev-text">{content.text}</p>
              </div>
              <div className="dev-image-cont">
                <img
                  src={content.devImage}
                  alt={content.title}
                  className="dev-image"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Development;
