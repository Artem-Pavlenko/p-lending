import { FC } from "react";

import IFilterBlockProps from "./props";
import "./styles.scss";
import { TitleBlock, Filter, ArrowTitle, AnimationTabBar } from "..";
import { IMAGES } from "../../assets";

export const FilterBlock: FC<IFilterBlockProps> = () => {
  return (
    <div className="filter-block">
      <div className="description-block">
        <div className="tab_bar_animation">
          <TitleBlock
            title="Title"
            description="Lorem ipsum dolor sit amet,
              consectetur adipiscing elit jklhvkjvf 
              kdvjcospckb kscihoasjc schisdchdsioc 
              kchwejoceqow dhvokecowjcf akichjk"
          />
          <AnimationTabBar />
        </div>
        <ArrowTitle
          text="Filter"
          img={IMAGES.ARROW_RIGHT}
          arrowStyle={{
            width: "62px",
            height: "62px",
          }}
        />
      </div>
      <Filter />
    </div>
  );
};
