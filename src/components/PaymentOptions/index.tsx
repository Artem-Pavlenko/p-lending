import { FC } from "react";

import IPaymentOptionsProps from "./props";
import "./styles.scss";
import { TitleBlock, DescriptionsPayment } from "..";
import { useIsSmallerDimension, useShowAnimation } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";
import { IMAGES } from "../../assets";

export const PaymentOptions: FC<IPaymentOptionsProps> = () => {
  const { isShowAnimation, animationRef } = useShowAnimation<HTMLDivElement>();
  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Payment);

  return (
    <div ref={animationRef} className="payment_options">
      <TitleBlock
        center
        maxWidth={725}
        marginBottom={63}
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit jklhvkjvf kdvjcospckb kscihoasjc 
         schisdchdsioc kchwejoceqow dhvokecowjcf akichjk"
      />
      {isSmallDimension ? (
        <div className="wrapper">
          <img className="mobile_phone_img" src={IMAGES.MOB_TABLE} alt="" />
          <span className="description_text">1 - Equally</span>
          <span className="description_text">2 - Manually</span>
        </div>
      ) : (
        <DescriptionsPayment isShowAnimation={isShowAnimation} />
      )}
    </div>
  );
};
