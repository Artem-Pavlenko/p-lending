import { FC } from "react";

import IButtonProps from "./props";
import "./styles.scss";

export const Button: FC<IButtonProps> = ({
  text,
  whiteStyle,
  onClick,
  className,
}) => (
  <button onClick={onClick} className={`${className} ${whiteStyle && "white"}`}>
    {text}
  </button>
);
