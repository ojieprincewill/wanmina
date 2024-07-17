import Management from "../../components/management/management.component";
import Marketing from "../../components/marketing/marketing.component";
import Development from "../../components/development/development.component";
import Design from "../../components/design/design.component";

export const SERVICES_DATA = [
  {
    title: "community management",
    details: <Management />,
    subTitles: ["Social media managers", "Shillers", "Advisers", "Moderators"],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image9.jpg?raw=true",
    id: 1,
  },
  {
    title: "marketing",
    details: <Marketing />,
    subTitles: [
      "Influencer marketing",
      "Social media marketing",
      "Content marketing",
      "Collaborations",
    ],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image18.jpg?raw=true",
    id: 2,
  },
  {
    title: "web development",
    details: <Development />,
    subTitles: [
      "Ui/Ux designers",
      "Fullstack developers",
      "Cybersecurity experts",
      "AI programmers",
    ],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image37.jpg?raw=true",
    id: 3,
  },
  {
    title: "graphic design",
    details: <Design />,
    subTitles: ["Banners and flyers", "NFT creators", "3D modeling experts"],
    imageUrl:
      "https://github.com/ojieprincewill/Wanmina-Illustrations/blob/master/%231/image34.jpg?raw=true",
    id: 4,
  },
];
