import { FC } from "react";

import ITextProps from "./props";
import "./styles.scss";
import { TextStyles } from "../../utils/constants";

export const Text: FC<ITextProps> = ({
  children,
  type = TextStyles.Description,
  style,
}) => (
  <span style={style} className={type}>
    {children}
  </span>
);
