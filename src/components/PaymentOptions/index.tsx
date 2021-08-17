import { FC } from "react";

import IPaymentOptionsProps from "./props";
import "./styles.scss";
import { TitleBlock, AnimationPayment } from "..";

export const PaymentOptions: FC<IPaymentOptionsProps> = () => {
  return (
    <div className="payment_options">
      <TitleBlock
        center
        maxWidth={725}
        marginBottom={63}
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit jklhvkjvf kdvjcospckb kscihoasjc 
         schisdchdsioc kchwejoceqow dhvokecowjcf akichjk"
      />
      <AnimationPayment />
    </div>
  );
};
