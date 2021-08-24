import { FC } from "react";

import ICategoryProps from "./props";
import { tabBar } from "./data";
import "./styles.scss";
import { AnimationCategory, TitleBlock, ArrowTitle } from "..";
import { IMAGES } from "../../assets";
import { useIsSmallerDimension } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";

export const Category: FC<ICategoryProps> = () => {
  const isSmallScreen = useIsSmallerDimension(DimensionTypes.Heading);

  return (
    <div className="category">
      <div className="wrapp">
        <ArrowTitle text="This is category" img={IMAGES.ARROW_RIGHT} />
        {isSmallScreen ? (
          <>
            <img className="mobile_category_img" src={IMAGES.CATEGORY} />
            <span className="description">1 - This is category </span>
            <span className="description">2 - Card of the restaurant</span>
            <span className="description">3 - Tab bar</span>
          </>
        ) : (
          <AnimationCategory />
        )}
      </div>
      <div>
        <TitleBlock
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
         elit jklhvkjvf kdvjcospckb kscihoasjc schisdchdsioc kchwejoceqow 
         dhvokecowjcf akichjk"
          marginBottom={isSmallScreen ? 40 : 130}
        />
        <ArrowTitle
          paddingText
          text="Card of the restaurant"
          img={IMAGES.ARROW_LEFT}
          arrowStyle={{ position: "absolute", left: "120px", top: "-25px" }}
        />
        <div className="tab_bar_items">
          <img src={IMAGES.ARROW} alt="" />
          {tabBar.map(({ img, name }) => (
            <div key={name} className="item">
              <img src={img} alt="" />
              <span className="item_name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
