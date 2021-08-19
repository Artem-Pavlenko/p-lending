import { CSSProperties } from "react";

export default interface IArrowTitileProps {
  text: string;
  img: string;
  arrowStyle?: CSSProperties;
  blockStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  paddingText?: boolean;
  alignAtem?: boolean;
  description?: string;
  hover?: boolean;
}
