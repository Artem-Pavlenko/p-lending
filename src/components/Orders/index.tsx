import { FC } from "react";

import IOrdersProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const Orders: FC<IOrdersProps> = () => {
  return (
    <div className="admin_panel_block">
      <img src={IMAGES.ORDERS} alt="1.Orders" className="img" />
    </div>
  );
};
