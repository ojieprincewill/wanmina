import Management from "../../components/management/management.component";
import Marketing from "../../components/marketing/marketing.component";
import Development from "../../components/development/development.component";
import Design from "../../components/design/design.component";

export const SERVICES_DATA = [
  {
    title: "community management",
    details: <Management />,
    subTitles: [
      "Social media management",
      "Community staffing",
      "Automated community moderation & security",
      "Community growth",
    ],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image9.jpg?raw=true",
    id: 1,
  },
  {
    title: "marketing",
    details: <Marketing />,
    subTitles: [
      "Influencer marketing",
      "Content marketing",
      "Email marketing",
      "and more...",
      // "Token listing",
      // "Content writing",
    ],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image18.jpg?raw=true",
    id: 2,
  },
  {
    title: "web development",
    details: <Development />,
    subTitles: ["Website development", "Ui/Ux design", "Website security"],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image37.jpg?raw=true",
    id: 3,
  },
  {
    title: "graphic design",
    details: <Design />,
    subTitles: [
      "Logo design",
      "Product design",
      "NFT art",
      "Banner and profile design",
    ],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image34.jpg?raw=true",
    id: 4,
  },
];
