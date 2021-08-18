import { FC } from "react";

import ITabBarItemProps from "./props";
import "./styles.scss";

export const TabBarItem: FC<ITabBarItemProps> = ({ text, className }) => {
  return <div className={`tab_bar_item ${className}`}>{text}</div>;
};
