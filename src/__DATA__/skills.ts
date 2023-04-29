import { DiReact, DiAngularSimple, DiJavascript1, DiHtml5, DiCss3, DiGitBranch } from "react-icons/di";
import { SiTypescript, SiFigma, SiNextdotjs, SiRedux, SiChakraui, SiStyledcomponents, SiFramer, SiReactquery } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { TbBrandStorybook } from "react-icons/tb";

import { Skill } from "@/types/Skills";

const SKILLS_LIST: Skill[] = [
  {
    name: "ReactJs",
    color: "#61dbfb",
    icon: DiReact,
    // TODO: Fix layout when too many subskills
    subSkills: [
      { name: "Redux", color: "#764abc", icon: SiRedux },
      { name: "ChakraUI", color: "teal", icon: SiChakraui },
      { name: "Reactstrap", color: "#63d7c", icon: BsBootstrap },
      { name: "Formik", color: "#004ec7", icon: AiOutlineForm },
      { name: "Styled Components", color: "#ef69d3", icon: SiStyledcomponents },
      { name: "Storybook", color: "#ff4785", icon: TbBrandStorybook },
      { name: "Framer Motion", color: "#000000", icon: SiFramer },
      { name: "Reaqwect Query", color: "#f15d35", icon: SiReactquery },
      { name: "React s", color: "#f15d35", icon: SiReactquery },
      { name: "g Query", color: "#f15d35", icon: SiReactquery },
    ],
  },
  {
    name: "NextJs",
    color: "#333",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    icon: DiJavascript1,
    color: "#F0DB4F",
    subSkills: [{ name: "Redux", color: "#333", icon: SiRedux }],
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007acc",
  },

  {
    name: "Angular 2+",
    icon: DiAngularSimple,
    color: "#dd1b16 ",
    subSkills: [{ name: "Redux", color: "#333", icon: SiRedux }],
  },

  {
    name: "CSS3",
    icon: DiCss3,
    color: "#264de4",
  },
  {
    name: "HTML5",
    icon: DiHtml5,
    color: "#e34c26",
  },

  {
    name: "GIT",
    icon: DiGitBranch,
    color: "#333",
  },

  {
    name: "Figma",
    icon: SiFigma,
    color: "#e34c26",
  },
];

export default SKILLS_LIST;
