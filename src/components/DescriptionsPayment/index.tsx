import { FC } from "react";

import IAnimationPaymentProps from "./props";
import "./styles.scss";
import { ArrowTitle, AnimationEqually, AnimationManually, InfoText } from "..";
import { IMAGES } from "../../assets";

export const DescriptionsPayment: FC<IAnimationPaymentProps> = ({
  isShowAnimation,
}) => (
  <div className="payment_types">
    <div className="phone_wrapper">
      <AnimationEqually isShowAnimation={isShowAnimation} />
      <ArrowTitle
        text="Equally"
        img={IMAGES.ARROW_LEFT}
        blockStyle={{ marginTop: "130px", marginLeft: "79px" }}
        arrowStyle={{
          position: "absolute",
          width: "70px",
          height: "70px",
          top: "25px",
          left: "-10px",
          transform: "rotate(-30deg)",
        }}
      />
      <InfoText
        text="Split the bill equally amongst everyone"
        className="equally_description"
      />
    </div>

    <div className="phone_wrapper">
      <ArrowTitle
        text="Manually"
        img={IMAGES.ARROW_LEFT}
        blockStyle={{ marginTop: "430px", marginRight: "79px" }}
        arrowStyle={{
          position: "absolute",
          width: "70px",
          height: "70px",
          top: "-150px",
          right: "5px",
          transform: "rotate(160deg)",
        }}
      />
      <InfoText
        text="Each person can pay for what they have had"
        className="manually_description"
      />
      <AnimationManually isShowAnimation={isShowAnimation} />
    </div>
  </div>
);
