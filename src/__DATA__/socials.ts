import { FiGithub, FiLinkedin } from "react-icons/fi";

import { SocialLink } from "@/types/socials";
import { SiInstagram, SiMastodon, SiMatrix } from "react-icons/si";

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
    icon: SiInstagram,
    color: "#c838aa",
  },
  {
    name: "Mastodon",
    link: "https://mastodon.social/@unbaked_potato",
    icon: SiMastodon,
    color: "#3088d4",
  },
  {
    name: "Matrix",
    link: "https://matrix.to/#/@0x0002:matrix.org",
    icon: SiMatrix,
    color: "#000000", //
  },
];

export default SOCIAL_LINKS;
