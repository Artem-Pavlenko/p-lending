import { FC } from "react";

import ITextProps from "./props";
import "./styles.scss";
import { TextStyles } from "../../utils/constants";

export const Text: FC<ITextProps> = ({
  children,
  type = TextStyles.Description,
  width = 407,
}) => (
  <span className={type} style={{ width: `${width}px` }}>
    {children}
  </span>
);
