import { FC } from "react";

import IBackgroundProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";

export const Background: FC<IBackgroundProps> = ({ children }) => (
  <div className="background">
    {children}
    <img src={IMAGES.LEAF_SEC} alt="" className="leaf1" />
    <img src={IMAGES.LEAF} alt="" className="leaf2" />
    <img src={IMAGES.LEAF} alt="" className="leaf3" />
    <img src={IMAGES.LEAF} alt="" className="leaf4" />
    <img src={IMAGES.LEAF_SEC} alt="" className="leaf5" />
    <img src={IMAGES.BAMBOO} alt="" className="bamboo1" />
    <img src={IMAGES.LEAF} alt="" className="leaf6" />
    <img src={IMAGES.LEAF} alt="" className="leaf7" />
    <img src={IMAGES.BAMBOO} alt="" className="bamboo2" />
  </div>
);
