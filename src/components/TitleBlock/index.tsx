import { FC } from "react";

import ITitleProps from "./props";
import "./styles.scss";

export const TitleBlock: FC<ITitleProps> = ({
  title,
  description,
  marginBottom = 130,
  maxWidth = 407,
  center,
}) => (
  <div
    className="title_block"
    style={{ marginBottom: `${marginBottom}px`, maxWidth: `${maxWidth}px` }}
  >
    <span className={`title ${center && "center"}`}>{title}</span>
    <span className={`description ${center && "center"}`}>{description}</span>
  </div>
);
