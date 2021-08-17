import { FC } from "react";

import ITitleProps from "./props";
import "./styles.scss";

export const TitleBlock: FC<ITitleProps> = ({
  title,
  description,
  marginBottom = 130,
}) => (
  <div className="title_block" style={{ marginBottom: `${marginBottom}px` }}>
    <span className="title">{title}</span>
    <span className="description">{description}</span>
  </div>
);
