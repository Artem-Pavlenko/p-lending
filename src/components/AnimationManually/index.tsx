import { FC } from "react";

import IAnimationManuallyProps from "./props";
import "./styles.scss";
import { PaymentTypeItem } from "..";
import { IMAGES } from "../../assets";

export const AnimationManually: FC<IAnimationManuallyProps> = ({
  isShowAnimation,
}) => (
  <div className="animation_manually">
    <PaymentTypeItem
      className={`manually ${isShowAnimation && "animation"}`}
      text="Manually"
    />
    <img src={IMAGES.MANUALLY_PHONE} alt="" />
  </div>
);
