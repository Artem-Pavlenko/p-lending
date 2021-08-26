import { FC } from "react";

import INavBarItemProps from "./props";
import "./styles.scss";

export const NabBarItem: FC<INavBarItemProps> = ({ name, img }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <span className="item_name">{name}</span>
    </div>
  );
};
