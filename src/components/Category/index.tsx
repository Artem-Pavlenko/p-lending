import { FC } from "react";

import ICategoryProps from "./props";
import { tabbar } from "./data";
import "./styles.scss";
import { AnimationCategory, TitleBlock, ArrowTitle } from "..";
import { IMAGES } from "../../assets";

export const Category: FC<ICategoryProps> = () => {
  return (
    <div className="category">
      <div className="wrapp">
        <ArrowTitle text="This is category" img={IMAGES.ARROW_RIGHT} />
        <AnimationCategory />
      </div>
      <div>
        <TitleBlock
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
         elit jklhvkjvf kdvjcospckb kscihoasjc schisdchdsioc kchwejoceqow 
         dhvokecowjcf akichjk"
        />
        <ArrowTitle
          paddingText
          text="Card of the restaurant"
          img={IMAGES.ARROW_LEFT}
          arrowStyle={{ position: "absolute", left: "85px", top: "-25px" }}
        />
        <div className="tab_bar_items">
          <img src={IMAGES.ARROW} alt="" />
          {tabbar.map(({ img, name }) => (
            <div className="item">
              <img src={img} alt="" />
              <span className="item_name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
