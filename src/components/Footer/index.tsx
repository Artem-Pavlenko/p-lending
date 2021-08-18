import { FC } from "react";

import IFooterProps from "./props";
import "./styles.scss";
import { Button } from "..";
import { IMAGES } from "../../assets";

export const Footer: FC<IFooterProps> = () => (
  <footer className="footer">
    <div className="footer_nav">
      <img src={IMAGES.LOGO_WHITE} alt="" />
      <a href="/#" className="link">
        Privecy Policy
      </a>
      <a href="/#" className="link">
        Terms&Conditions
      </a>
      <a href="mailto:support@pandamenus.com" className="link email">
        support@pandamenus.com
      </a>
      <Button whiteStyle text="Join us" />
    </div>
  </footer>
);
