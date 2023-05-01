import { DiReact, DiAngularSimple, DiJavascript1, DiHtml5, DiCss3, DiGitBranch, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiFigma,
  SiNextdotjs,
  SiRedux,
  SiChakraui,
  SiStyledcomponents,
  SiFramer,
  SiReactquery,
  SiNodedotjs,
  SiMaterialdesign,
  SiAzuredevops,
  SiExpress,
  SiSocketdotio,
  SiJest,
  SiAxios,
  SiApollographql,
  SiGraphql,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { BsBootstrap, BsCalendar2Date } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillPieChart,
  AiOutlineClockCircle,
  AiOutlineDatabase,
  AiOutlineForm,
} from "react-icons/ai";
import { TbBrandMongodb, TbBrandStorybook } from "react-icons/tb";

import { Skill } from "@/types/Skills";

const SKILLS_LIST: Skill[] = [
  {
    name: "ReactJs",
    color: "#61dbfb",
    icon: DiReact,
    subSkills: [
      { name: "Redux", color: "#764abc", icon: SiRedux },
      { name: "ChakraUI", color: "teal", icon: SiChakraui },
      { name: "Reactstrap", color: "#63d7c", icon: BsBootstrap },
      { name: "Formik", color: "#004ec7", icon: AiOutlineForm },
      { name: "Styled Components", color: "#ef69d3", icon: SiStyledcomponents },
      { name: "Storybook", color: "#ff4785", icon: TbBrandStorybook },
      { name: "Framer Motion", color: "#000000", icon: SiFramer },
      { name: "React Query", color: "#f15d35", icon: SiReactquery },
      { name: "Apollo GraphQL", color: "#311c87", icon: SiApollographql },
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
    subSkills: [
      { name: "ChartJs", color: "#fe777b", icon: AiFillPieChart },
      { name: "MomentJs", color: "#1f1f1f", icon: AiOutlineClockCircle },
      { name: "Jest", color: "#15c213", icon: SiJest },
      { name: "Axios", color: "#671ddf", icon: SiAxios },
    ],
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
    subSkills: [
      { name: "Angular Material", color: "#3f51b5", icon: SiMaterialdesign },
      { name: "Bootstrap", color: "#63d7c", icon: BsBootstrap },
      { name: "Apollo GraphQL", color: "#311c87", icon: SiApollographql },
    ],
  },

  {
    name: "CSS3",
    icon: DiCss3,
    color: "#264de4",
    subSkills: [
      { name: "SCSS", color: "#c66394", icon: DiSass },
      { name: "Bootstrap", color: "#63d7c", icon: BsBootstrap },
    ],
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
    subSkills: [
      { name: "GitHub", color: "#24292f", icon: AiFillGithub },
      { name: "GitLab", color: "#e24329", icon: AiFillGitlab },
      { name: "Azure DevOps", color: "#0072cf", icon: SiAzuredevops },
    ],
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#e34c26",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#ee0097",
  },
  {
    name: "NodeJs",
    icon: SiNodedotjs,
    color: "#70a561",
    subSkills: [
      { name: "ExpressJs", color: "#010101", icon: SiExpress },
      { name: "Socket.IO", color: "#010101", icon: SiSocketdotio },
    ],
  },
  {
    name: "Databases",
    icon: AiOutlineDatabase,
    color: "#333",
    subSkills: [
      { name: "MySQL", color: "#dd8a00", icon: SiMysql },
      { name: "MongoDB", color: "#116149", icon: TbBrandMongodb },
      { name: "PostgreSQL", color: "#336791", icon: SiPostgresql },
    ],
  },
];

export default SKILLS_LIST;
