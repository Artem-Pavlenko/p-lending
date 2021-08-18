import { FC, useRef } from "react";

import IAnimationCategoryProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";
import { useShowAnimation } from "../../utils/hooks";

export const AnimationCategory: FC<IAnimationCategoryProps> = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  const { isShowAnimation } = useShowAnimation<HTMLDivElement>(animationRef);

  return (
    <div ref={animationRef} className="categoty_animation_wrapp">
      <img src={IMAGES.CATEGORY_PHONE} alt="" />
      <img
        src={IMAGES.A_TAB_BAR}
        alt=""
        className={`tab_bar_img ${isShowAnimation && "animation"}`}
      />
      <img
        src={IMAGES.A_CATEGORY}
        alt=""
        className={`category_img ${isShowAnimation && "animation"}`}
      />
      <img
        src={IMAGES.A_RESTAURANT_CARD}
        alt=""
        className={`card_img ${isShowAnimation && "animation"}`}
      />
    </div>
  );
};
