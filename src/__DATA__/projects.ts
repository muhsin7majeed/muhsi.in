import { SiReact, SiTypescript, SiPixiv } from "react-icons/si";

import { Project } from "@/types/Project";

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
];

export default PROJECTS_DATA;
