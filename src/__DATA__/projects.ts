import { SiReact, SiTypescript, SiPixiv } from "react-icons/si";
import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";

import { Project } from "@/types/Project";
import { AiOutlineApi } from "react-icons/ai";

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "World's on Fire",
    description:
      "An arcade 2d shooter game built with React, PixiJS, and TypeScript.",
    image: "/assets/wof-landing.png",
    githubUrl: "https://github.com/muhsin7majeed/worlds-on-fire",
    websiteUrl: "https://wof.muhsi.in/",
    technologies: [
      { name: "React", icon: SiReact, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#007acc" },
      { name: "PixiJS", icon: SiPixiv, color: "#319795" },
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
    technologies: [
      { name: "JavaScript", icon: DiJavascript1, color: "#F0DB4F" },
      { name: "HTML5", icon: DiHtml5, color: "#e34c26" },
      { name: "CSS3", icon: DiCss3, color: "#264de4" },
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
    technologies: [
      { name: "VanillaJs", icon: DiJavascript1, color: "#F0DB4F" },
      { name: "Fast.fm API", icon: AiOutlineApi, color: "#007acc" },
    ],
  },
];

export default PROJECTS_DATA;
