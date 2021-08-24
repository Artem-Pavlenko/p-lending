import { FC } from "react";

import ITextProps from "./props";
import "./styles.scss";
import { TextStyles } from "../../utils/constants";

export const Text: FC<ITextProps> = ({
  children,
  type = TextStyles.Description,
  maxWidth = 407,
}) => (
  <span className={type} style={{ maxWidth: `${maxWidth}px` }}>
    {children}
  </span>
);
