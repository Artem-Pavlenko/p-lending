import { FC } from "react";

import IAnimationCategoryProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const AnimationCategory: FC<IAnimationCategoryProps> = () => {
  return (
    <div className="categoty-animation-wrapp">
      <img src={IMAGES.CATEGORY_PHONE} alt="" />
      <img src={IMAGES.TAB_BAR} alt="" className="tab-bar" />
      <img alt="" />
      <img alt="" />
    </div>
  );
};
