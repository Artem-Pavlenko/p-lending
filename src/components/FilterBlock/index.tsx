import { FC } from "react";

import IFilterBlockProps from "./props";
import "./styles.scss";
import { TitleBlock, Filter, ArrowTitle } from "..";
import { IMAGES } from "../../assets";

export const FilterBlock: FC<IFilterBlockProps> = () => {
  return (
    <div className="filter-block">
      <div className="description-block">
        <TitleBlock
          title="Title"
          description="Lorem ipsum dolor sit amet,
         consectetur adipiscing elit jklhvkjvf 
         kdvjcospckb kscihoasjc schisdchdsioc 
         kchwejoceqow dhvokecowjcf akichjk"
        />
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
