import { FC } from "react";
import { IMAGES } from "../../assets";

import IMenuProps from "./props";
import "./styles.scss";

export const Menu: FC<IMenuProps> = () => {
  return (
    <div className="admin_panel_block">
      <img src={IMAGES.MENU} alt="2.Menu" className="img" />
    </div>
  );
};
