import { FC } from "react";

import IArrowTitileProps from "./props";
import "./styles.scss";

export const ArrowTitle: FC<IArrowTitileProps> = ({
  text,
  img,
  style,
  paddingText,
}) => (
  <div className="arrow-wrapper">
    <span className={paddingText ? "text with_padding" : "text"}>{text}</span>
    <img src={img} alt="" style={style} />
  </div>
);
