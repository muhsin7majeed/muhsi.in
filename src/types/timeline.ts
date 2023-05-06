import { IconType } from "react-icons/lib";

export interface TimelineData {
  id: number;
  date: string;
  title: string;
  icon: IconType;
  description: string;
  link?: string;
}
