import { FC } from "react";

import IFilterProps from "./props";
import "./styles.scss";
import { ArrowTitle, AnimationFilter } from "..";
import { IMAGES } from "../../assets";

export const Filter: FC<IFilterProps> = () => {
  return (
    <div className="filter">
      <AnimationFilter />
      <div className="arrow_block">
        <ArrowTitle text="Sold out item" img={IMAGES.ARROW_DOWN} />
        <ArrowTitle
          paddingText
          text="Discount"
          img={IMAGES.ARROW2}
          blockStyle={{ marginTop: "278px", marginBottom: "350px" }}
          arrowStyle={{
            position: "absolute",
            top: "-38px",
            left: "100px",
            height: "15px",
            width: "53px",
          }}
        />
        <ArrowTitle
          alignItem
          text="Menu item"
          img={IMAGES.ARROW_TOP}
          arrowStyle={{ position: "absolute", top: "-150px", right: "195px" }}
        />
      </div>
    </div>
  );
};
