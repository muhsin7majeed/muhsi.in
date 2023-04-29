import { IconType } from "react-icons/lib";

export interface Skill {
  name: string;
  color: string;
  icon: IconType;
  subSkills?: Skill[];
}
