import { FC } from "react";

import IHeaderProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const Header: FC<IHeaderProps> = () => {
  return (
    <div className="header">
      <img src={IMAGES.HEAD} alt="" className="background-header" />
      <img src={IMAGES.LOGO} alt="" className="logo" />
    </div>
  );
};
