import { FC } from "react";

import INavBarItemProps from "./props";
import "./styles.scss";

export const NabBarItem: FC<INavBarItemProps> = ({ name, img, index }) => {
  console.log("index -->", index);
  console.log("index % 2 -->", index % 2);

  return (
    <div className="item">
      <img src={img} alt="" />
      <span className="item_name">{name}</span>
    </div>
  );
};
