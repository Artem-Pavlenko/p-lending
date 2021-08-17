import { FC } from "react";

import IArrowTitileProps from "./props";
import "./styles.scss";

export const ArrowTitle: FC<IArrowTitileProps> = ({
  text,
  img,
  arrowStyle,
  blockStyle,
  paddingText,
}) => (
  <div className="arrow-wrapper" style={blockStyle}>
    <span className={paddingText ? "text with_padding" : "text"}>{text}</span>
    <img src={img} alt="" style={arrowStyle} />
  </div>
);
