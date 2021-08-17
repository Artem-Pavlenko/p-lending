import { FC } from "react";

import IFooterProps from "./props";
import "./styles.scss";
import { Button } from "..";
import { IMAGES } from "../../assets";

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer_nav">
        <img src={IMAGES.LOGO_WHITE} alt="" />
        <a className="link">Privecy Policy</a>
        <a className="link">Terms&Conditions</a>
        <a className="link email">support@pandamenus.com</a>
        <Button whiteStyle text="Join us" />
      </div>
    </footer>
  );
};
