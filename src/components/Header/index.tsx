import { FC } from "react";

import IHeaderProps from "./props";
import "./styles.scss";
import { Button, Text } from "..";
import { IMAGES } from "../../assets";
import { DimensionTypes, TextStyles } from "../../utils/constants";
import { useIsSmallerDimension, useShowAnimation } from "../../utils/hooks";

export const Header: FC<IHeaderProps> = ({ showModalHandler }) => {
  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Heading);
  const withAnimation = useIsSmallerDimension(DimensionTypes.Button);

  const { animationRef, isShowAnimation } =
    useShowAnimation<HTMLDivElement>(50);

  const onClockLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="background_header" />
      <img onClick={onClockLogo} src={IMAGES.LOGO} alt="" className="logo" />

      <div className="gradient_fixed" />

      <div className="header_wrapper">
        <Text
          type={
            isSmallDimension ? TextStyles.AdaptiveHeader : TextStyles.Header
          }
          style={{
            maxWidth: "770px",
            marginBottom: isSmallDimension ? "16px" : "20px",
            textShadow:
              "1px 0px 0px #35644a, -1px 0px 0px #35644a, 2px 0px 0px #35644a",
          }}
        >
          Welcome To Panda
        </Text>

        <Text
          type={
            isSmallDimension ? TextStyles.AdaptiveHeader : TextStyles.Header
          }
          style={{
            maxWidth: "770px",
            marginBottom: isSmallDimension ? "16px" : "20px",
          }}
        >
          The all in one app for bars and restaurants
        </Text>

        <span className="header_title">
          Search, book, order and pay with Panda
        </span>

        <div
          ref={animationRef}
          className={`button_wrapper ${
            !withAnimation && isShowAnimation && "animation"
          }`}
        >
          <Button onClick={showModalHandler} text="Join us" />
        </div>
      </div>
      <img src={IMAGES.HEADER_PHONE} alt="" className="head_phone" />
    </div>
  );
};
