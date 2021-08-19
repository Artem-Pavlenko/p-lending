import { FC } from "react";

import IPaymentTypeItemProps from "./props";
import "./styles.scss";

export const PaymentTypeItem: FC<IPaymentTypeItemProps> = ({
  text,
  className,
}) => <div className={`payment_type_item ${className}`}>{text}</div>;
