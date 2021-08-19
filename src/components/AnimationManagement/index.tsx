import { FC } from "react";

import IAnimationManagementProps from "./props";
import "./styles.scss";
import { TabBarItem } from "..";
import { IMAGES } from "../../assets";
import { useShowAnimation } from "../../utils/hooks";

export const AnimationManagement: FC<IAnimationManagementProps> = () => {
  const { isShowAnimation, animationRef } = useShowAnimation<HTMLDivElement>();

  return (
    <div ref={animationRef} className="animation_management">
      <img
        className={`list ${isShowAnimation && "animation"}`}
        src={IMAGES.A_LIST}
        alt=""
      />
      <img
        className={`coupon ${isShowAnimation && "animation"}`}
        src={IMAGES.A_COUPON}
        alt=""
      />
      <TabBarItem
        className={`tab_item ${isShowAnimation && "animation"}`}
        text="Active bill"
      />
      <img className="phone" src={IMAGES.MANAGEMENT_PHONE} alt="" />
    </div>
  );
};
