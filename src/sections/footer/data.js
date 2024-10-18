import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/harsh___19/?igsh=bm54c2I1Zm8wMGM3",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/harsh-ghanghoriya-8505741bb/",
    icon: <AiOutlineLinkedin />,
  },
  {
    id: 3,
    link: "https://github.com/HarshGhanghoriya",
    icon: <AiOutlineGithub />,
  },
  {
    id: 4,
    link: "https://leetcode.com/u/Harsh_super/",
    icon: <SiLeetcode />,
  },
];

const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#portfolio", title: "Portfolio" },
  { id: 4, link: "#contact", title: "Contact" },
];

export { links, socials };
