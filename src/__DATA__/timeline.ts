import { FaBirthdayCake, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

import { TimelineData } from "@/types/timeline";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";

export const TIMELINE_DATA: TimelineData[] = [
  {
    id: 1,
    date: "Nov 1998",
    title: "Hello World!",
    icon: FaBirthdayCake,
    description: "I was born in Kerala, India, and my journey began.",
  },
  {
    id: 2,
    date: "Mar 2016",
    title: "Higher Secondary School",
    icon: FaSchool,
    description:
      "I completed my higher secondary education from a nearby school. Although I wanted to major in Science, my 10th standard score didn't allow me to do so. Instead, I ended up with commerce.",
  },
  {
    id: 3,
    date: "Mar 2019",
    title: "B.Com at CAS IHRD Kartikappally",
    icon: MdSchool,
    description:
      "Although I didn't have an interest in commerce, finished 3 years of college studying B.Com from a nearby college. Unfortunately, I didn't clear all my exams.",
  },
  {
    id: 4,
    date: "Oct 2019",
    title: "Frontend Developer at Techwarelab",
    icon: SiJavascript,
    description:
      "Instead of clearing my failed college exams, I decided to pursue my career as a web developer. I'm forever grateful that, Even though I didn't have a college degree or any formal education in computer science, Techwarelab saw my potential and gave me the opportunity to kickstart my career in web development. I learned ReactJs, Angular 2+, Ionic, and worked on various projects while I was there.",
    link: "https://techwarelab.com/",
  },
  {
    id: 5,
    date: "Nov 2021",
    title: "Software Engineer at Springworks",
    icon: GrReactjs,
    description:
      " After two years at Techwarelab, I moved to Springworks where I'm currently working as a ReactJs developer. I work on adding new features and fixing bugs of a huge business management tool.",
    link: "https://www.springworks.in/",
  },
  {
    id: 6,
    date: "May 2023",
    title: "I've finally updated my portfolio!",
    icon: BsGlobe,
    description:
      "To showcases my skills and passion for web development, and I hope it helps me to achieve my goal of landing my dream job as a frontend developer.",
  },
];
