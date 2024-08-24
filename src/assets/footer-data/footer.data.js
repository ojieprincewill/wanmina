import { IoLogoTwitter, IoLogoDiscord, IoLogoLinkedin } from "react-icons/io5";

export const FOOTER_DATA = [
  {
    title: "get started",
    links: [
      { text: "Contact Us", target: "/contact" },
      { text: "Email Us", target: "" },
      { text: "Make Inquiries", target: "" },
      { text: "Events", target: "" },
    ],
    socialIcons: [],
    id: 1,
  },
  {
    title: "company",
    links: [
      { text: "Affiliate Communities", target: "" },
      { text: "Publication", target: "" },
      { text: "About Us", target: "/about" },
      { text: "FAQ", target: "/questions" },
    ],
    socialIcons: [],
    id: 2,
  },
  {
    title: "social media",
    links: [
      {
        text: "Twitter",
        target: "https://x.com/Wanminafirm?t=laCFGXgIV1991T-wjrLWVA&s=09",
      },
      // { text: "Telegram", target: "" },
      {
        text: "Discord",
        target:
          "https://discord.com/channels/1000119373660426371/1000694686744322078",
      },
      { text: "LinkedIn", target: "https://www.linkedin.com/company/wanmina/" },
    ],
    socials: [
      {
        icon: <IoLogoTwitter />,
        iconTarget: "https://x.com/Wanminafirm?t=laCFGXgIV1991T-wjrLWVA&s=09",
      },
      {
        icon: <IoLogoDiscord />,
        iconTarget:
          "https://discord.com/channels/1000119373660426371/1000694686744322078",
      },
      {
        icon: <IoLogoLinkedin />,
        iconTarget: "https://www.linkedin.com/company/wanmina/",
      },
    ],
    id: 3,
  },
];
