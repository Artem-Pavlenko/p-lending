import { FC, RefObject, useEffect, useRef, useState } from "react";

import IAnimationCategoryProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const AnimationCategory: FC<IAnimationCategoryProps> = () => {
  const [isShowAnimation, setIsShowAnimation] = useState<boolean>(false);

  const wrappRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const playAnimation = <T extends HTMLElement>(ref: RefObject<T>) => {
      if (ref.current && window.pageYOffset >= ref.current.offsetTop) {
        setIsShowAnimation(true);
      }
    };

    window.addEventListener("scroll", () =>
      playAnimation<HTMLDivElement>(wrappRef)
    );

    return () => {
      window.removeEventListener("scroll", () =>
        playAnimation<HTMLDivElement>(wrappRef)
      );
    };
  }, []);

  return (
    <div ref={wrappRef} className="categoty_animation_wrapp">
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
