import { CSSProperties } from "react";

export default interface IArrowTitleProps {
  text: string;
  img: string;
  arrowStyle?: CSSProperties;
  blockStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  paddingText?: boolean;
  alignItem?: boolean;
  description?: string;
  hover?: boolean;
}
