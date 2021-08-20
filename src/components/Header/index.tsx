import { FC } from "react";

import IHeaderProps from "./props";
import "./styles.scss";
import { Button, Text } from "..";
import { IMAGES } from "../../assets";
import { TextStyles } from "../../utils/constants";

export const Header: FC<IHeaderProps> = ({ showModalHandler }) => (
  <div className="header">
    <img src={IMAGES.HEAD} alt="" className="background-header" />
    <img src={IMAGES.LOGO} alt="" className="logo" />
    <div className="header-wrapper">
      <Text type={TextStyles.Header}>
        Welcome to Panda, The all in one App for Bars, Restaurants and Event
        Spaces
      </Text>
      <Button onClick={showModalHandler} text="Join us" />
    </div>
    <img src={IMAGES.HEADER_PHONE} alt="" className="head-phone" />
  </div>
);
