import { FC } from "react";

import IStaffProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const Staff: FC<IStaffProps> = () => {
  return (
    <div className="admin_panel_block">
      <img src={IMAGES.STAFF} alt="3.Staff" className="img" />
    </div>
  );
};
