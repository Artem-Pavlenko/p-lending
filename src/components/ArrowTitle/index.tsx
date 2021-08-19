import { FC } from "react";

import IArrowTitileProps from "./props";
import "./styles.scss";

export const ArrowTitle: FC<IArrowTitileProps> = ({
  text,
  img,
  arrowStyle,
  blockStyle,
  descriptionStyle,
  paddingText,
  alignAtem,
  description,
  hover,
}) => (
  <div className={`arrow_wrapper ${alignAtem && "align"}`} style={blockStyle}>
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
