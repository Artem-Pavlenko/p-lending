import { FC } from "react";

import IAnimationEquallyProps from "./props";
import "./styles.scss";
import { PaymentTypeItem } from "..";
import { IMAGES } from "../../assets";

export const AnimationEqualyy: FC<IAnimationEquallyProps> = ({
  isShowAnimation,
}) => (
  <div className="equally_animation">
    <PaymentTypeItem
      className={`equally ${isShowAnimation && "animation"}`}
      text="Equally"
    />
    <img className="phone" src={IMAGES.EQUALLY_PHONE} alt="" />
  </div>
);
