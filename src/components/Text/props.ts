import React, { CSSProperties } from "react";

import { TextStyles } from "../../utils/constants";

export default interface ITextProps {
  type?: TextStyles;
  style?: CSSProperties;
  children: React.ReactNode;
}
