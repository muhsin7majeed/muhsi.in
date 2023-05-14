import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { SocialLink } from "@/types/socials";

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhsin7majeed/",
    icon: FiLinkedin,
    color: "#0a66c2",
  },
  {
    name: "Github",
    link: "https://github.com/muhsin7majeed/",
    icon: FiGithub,
    color: "#161b22",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/muhsin7majeed/",
    icon: FiInstagram,
    color: "#c838aa",
  },
];

export default SOCIAL_LINKS;
