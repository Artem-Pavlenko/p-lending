import { FC } from "react";

import IPaymentOptionsProps from "./props";
import "./styles.scss";
import { TitleBlock, DescriptionsPayment } from "..";
import { useShowAnimation } from "../../utils/hooks";

export const PaymentOptions: FC<IPaymentOptionsProps> = () => {
  const { isShowAnimation, animationRef } = useShowAnimation<HTMLDivElement>();

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
      <DescriptionsPayment isShowAnimation={isShowAnimation} />
    </div>
  );
};
