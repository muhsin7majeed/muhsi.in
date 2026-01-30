import {
  SiReact,
  SiTypescript,
  SiPixiv,
  SiChakraui,
  SiNodedotjs,
  SiSqlite,
} from "react-icons/si";
import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";

import { Project } from "@/types/Project";
import { AiOutlineApi } from "react-icons/ai";
import { ImEarth } from "react-icons/im";

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "World's on Fire",
    description:
      "An arcade 2d shooter game built with React, PixiJS, and TypeScript.",
    image: "/assets/wof-landing.png",
    githubUrl: "https://github.com/muhsin7majeed/worlds-on-fire",
    websiteUrl: "https://wof.muhsi.in/",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PixiJS", icon: SiPixiv, color: "#E91E63" },
      { name: "Open-source", icon: ImEarth, color: "#4CAF50" },
    ],
  },
  {
    id: 2,
    title: "Live Camera to ASCII Art",
    description:
      "A real-time webcam to ASCII art converter built with vanilla JavaScript, HTML5 Canvas, and MediaDevices API.",
    image: "/assets/live-cam-ascii.png",
    githubUrl: "https://github.com/muhsin7majeed/live-cam-ascii",
    websiteUrl: "https://live-ascii.muhsi.in/",
    tags: [
      { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
      { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: DiCss3, color: "#1572B6" },
      { name: "Open-source", icon: ImEarth, color: "#4CAF50" },
    ],
  },
  {
    id: 3,
    title: "Genre.live",
    description:
      "Simple music genre finder with Fast.fm API. No login, no paywall, no ads & no tracking.",
    image: "/assets/genre.live.png",
    githubUrl: "https://github.com/muhsin7majeed/genre.live",
    websiteUrl: "https://gl.muhsi.in/",
    tags: [
      { name: "VanillaJs", icon: DiJavascript1, color: "#F7DF1E" },
      { name: "Fast.fm API", icon: AiOutlineApi, color: "#D51007" },
      { name: "Open-source", icon: ImEarth, color: "#4CAF50" },
    ],
  },
  {
    id: 4,
    title: "What to watch (alpha)",
    description:
      "A privacy-focused movie and TV show tracker that doesn't sell your viewing habits to advertisers. Track what you've watched, save what you want to see, and actually own your data.",
    image: "/assets/wtw-landing.png",
    githubUrl: "https://github.com/muhsin7majeed/what-to-watch-web",
    websiteUrl: "https://wtw.muhsi.in/",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
      { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Open-source", icon: ImEarth, color: "#4CAF50" },
    ],
  },
];

export default PROJECTS_DATA;
