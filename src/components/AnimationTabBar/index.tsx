import { FC, useRef } from "react";

import IAnimationTabBarProps from "./props";
import "./styles.scss";
import { TabBarItem, ArrowTitle } from "..";
import { useShowAnimation } from "../../utils/hooks";
import { IMAGES } from "../../assets";

export const AnimationTabBar: FC<IAnimationTabBarProps> = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  const { isShowAnimation } = useShowAnimation<HTMLDivElement>(animationRef);

  return (
    <div ref={animationRef} className="animation_tab_bar">
      <TabBarItem
        text="Dinner"
        className={`dinner ${isShowAnimation && "animation"}`}
      />
      <TabBarItem
        text="Lunch"
        className={`lunch ${isShowAnimation && "animation"}`}
      />
      <TabBarItem
        text="Brunch"
        className={`brunch ${isShowAnimation && "animation"}`}
      />
      <TabBarItem
        text="All day menu"
        className={`all ${isShowAnimation && "animation"}`}
      />

      <ArrowTitle
        text="Hover tab bar menu"
        img={IMAGES.ARROW2}
        blockStyle={{
          position: "absolute",
          zIndex: -1,
          top: "5px",
          left: "240px",
          whiteSpace: "nowrap",
          fontSize: "28px",
        }}
        arrowStyle={{
          position: "absolute",
          width: "53px",
          height: "15px",
          top: "-35px",
          left: "-63px",
        }}
      />
    </div>
  );
};
