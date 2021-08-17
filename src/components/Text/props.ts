import React from "react";

import { TextStyles } from "../../utils/constants";

export default interface ITextprops {
  type?: TextStyles;
  children: React.ReactNode;
  width?: number;
}
