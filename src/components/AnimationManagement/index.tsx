import { FC } from "react";

import IAnimationManagementProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const AnimationManagement: FC<IAnimationManagementProps> = () => {
  return (
    <div className="animation_management">
      <img src={IMAGES.MANAGEMENT_PHONE} alt="" />
    </div>
  );
};
