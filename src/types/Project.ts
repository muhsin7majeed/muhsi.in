import { IconType } from "react-icons/lib";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  websiteUrl: string;
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
} 