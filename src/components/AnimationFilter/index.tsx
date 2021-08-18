import { FC, useRef } from "react";

import IAnimationFilterProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";
import { useShowAnimation } from "../../utils/hooks";

export const AnimationFilter: FC<IAnimationFilterProps> = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  const { isShowAnimation } = useShowAnimation<HTMLDivElement>(animationRef);

  return (
    <div ref={animationRef} className="animation_wrapper">
      <img
        className={`vegetarian ${isShowAnimation && "animation"}`}
        src={IMAGES.A_VEGETARIAN}
        alt=""
      />
      <img
        className={`filter_bar ${isShowAnimation && "animation"}`}
        src={IMAGES.A_NAV_BAR}
        alt=""
      />
      <img
        className={`disabled_card ${isShowAnimation && "animation"}`}
        src={IMAGES.A_MENU_CARD}
        alt=""
      />
      <img
        className={`sale ${isShowAnimation && "animation"}`}
        alt=""
        src={IMAGES.A_SALE}
      />
      <img
        className={`card ${isShowAnimation && "animation"}`}
        alt=""
        src={IMAGES.A_MENU_CARD2}
      />

      <img className="phone" src={IMAGES.FILTER_PHONE} alt="" />
    </div>
  );
};
