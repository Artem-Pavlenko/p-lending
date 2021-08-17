import { FC } from "react";

import IButtonProps from "./props";
import "./styles.scss";

export const Button: FC<IButtonProps> = ({ text, whiteStyle }) => (
  <button className={`${whiteStyle && "white"}`}>{text}</button>
);
