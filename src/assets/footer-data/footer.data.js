import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

export const FOOTER_DATA = [
  {
    title: "get started",
    links: ["Contact Us", "Socials", "Email Us", "Make Inquiries", "Events"],
    socialIcons: [],
    id: 1,
  },
  {
    title: "company",
    links: ["Affiliate Communities", "Publication", "About Us", "FAQ"],
    socialIcons: [],
    id: 2,
  },
  {
    title: "social media",
    links: ["Twitter", "Telegram", "Discord", "LinkedIn"],
    socialIcons: [<IoLogoTwitter />, <IoLogoInstagram />, <IoLogoLinkedin />],
    id: 3,
  },
];
