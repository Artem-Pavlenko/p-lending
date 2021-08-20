import { FC } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import IFooterProps from "./props";
import "./styles.scss";
import { Button } from "..";
import { IMAGES } from "../../assets";
import { Routes } from "../../utils/constants";

export const Footer: FC<IFooterProps> = ({ showModalHandler }) => {
  const pathname = useLocation().pathname;
  const history = useHistory();

  const onClockLogoHandler = () => {
    if (pathname === Routes.Home) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      history.push(Routes.Home);
    }
  };

  return (
    <footer className="footer">
      <div className="footer_nav">
        <img
          onClick={onClockLogoHandler}
          src={IMAGES.LOGO_WHITE}
          alt=""
          className="white_logo"
        />

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
};
