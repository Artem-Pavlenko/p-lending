import { FC } from "react";

import IAnimationFilterProps from "./props";
import "./styles.scss";
import { ArrowTitle } from "..";
import { IMAGES } from "../../assets";

export const AnimationFilter: FC<IAnimationFilterProps> = () => {
  return (
    <div className="animation-filter">
      <img className="phone" src={IMAGES.FILTER_PHONE} alt="" />
      <div className="arrow_block">
        <ArrowTitle text="Sold out item" img={IMAGES.ARROW_DOWN} />
        <ArrowTitle
          paddingText
          text="Discount"
          img={IMAGES.ARROW2}
          blockStyle={{ marginTop: "240px", marginBottom: "350px" }}
          arrowStyle={{
            position: "absolute",
            top: "-38px",
            left: "100px",
            height: "15px",
            width: "53px",
          }}
        />
        <ArrowTitle
          alignAtem
          text="Menu item"
          img={IMAGES.ARROW_TOP}
          arrowStyle={{ position: "absolute", top: "-150px", right: "195px" }}
        />
      </div>
    </div>
  );
};
