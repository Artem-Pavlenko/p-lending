import { FC } from "react";
import { Link } from "react-router-dom";

import IFooterProps from "./props";
import "./styles.scss";
import { Button } from "..";
import { IMAGES } from "../../assets";
import { Routes } from "../../utils/constants";

export const Footer: FC<IFooterProps> = ({ showModalHandler }) => (
  <footer className="footer">
    <div className="footer_nav">
      <Link to={Routes.Home}>
        <img src={IMAGES.LOGO_WHITE} alt="" />
      </Link>

      <Link to={Routes.PrivacyPolicy} className="link">
        Privacy Policy
      </Link>
      <Link to={Routes.TermsConditions} className="link">
        Terms&Conditions
      </Link>
      <a href="mailto:support@pandamenus.com" className="link email">
        support@pandamenus.com
      </a>
      <Button onClick={showModalHandler} whiteStyle text="Join us" />
    </div>
  </footer>
);
