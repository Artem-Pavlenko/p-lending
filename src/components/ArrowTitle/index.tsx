import { FC } from "react";

import IArrowTitleProps from "./props";
import "./styles.scss";

export const ArrowTitle: FC<IArrowTitleProps> = ({
  text,
  img,
  arrowStyle,
  blockStyle,
  descriptionStyle,
  paddingText,
  alignItem,
  description,
  hover,
}) => (
  <div className={`arrow_wrapper ${alignItem && "align"}`} style={blockStyle}>
    <span
      className={`text ${paddingText && "with_padding"}  ${hover && "hover"}`}
    >
      {text}
    </span>
    {description && (
      <span className="description" style={descriptionStyle}>
        {description}
      </span>
    )}
    <img src={img} alt="" style={arrowStyle} />
  </div>
);
