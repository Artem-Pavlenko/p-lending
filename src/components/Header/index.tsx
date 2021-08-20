import { FC } from "react";

import IHeaderProps from "./props";
import "./styles.scss";
import { Button, Text } from "..";
import { IMAGES } from "../../assets";
import { TextStyles } from "../../utils/constants";

export const Header: FC<IHeaderProps> = ({ showModalHandler }) => {
  const onClockLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="background_header" />
      <img onClick={onClockLogo} src={IMAGES.LOGO} alt="" className="logo" />

      <div className="gradient_fixed" />

      <div className="header-wrapper">
        <Text type={TextStyles.Header} width={770}>
          Welcome to Panda, The all in one App for Bars, Restaurants and Event
          Spaces
        </Text>
        <Button onClick={showModalHandler} text="Join us" />
      </div>
      <img src={IMAGES.HEADER_PHONE} alt="" className="head-phone" />
    </div>
  );
};
