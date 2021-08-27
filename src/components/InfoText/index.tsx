import { FC } from "react";

import IInfoTextProps from "./props";
import "./styles.scss";

export const InfoText: FC<IInfoTextProps> = ({ className, text }) => {
  return <span className={`info_text ${className}`}>{text}</span>;
};
