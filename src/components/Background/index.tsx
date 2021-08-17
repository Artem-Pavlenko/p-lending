import { FC } from "react";
import { IMAGES } from "../../assets";

import IBackgroundProps from "./props";
import "./styles.scss";

export const Background: FC<IBackgroundProps> = ({ children }) => (
  <div className="background">{children}</div>
);
