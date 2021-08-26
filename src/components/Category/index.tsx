import { FC } from "react";

import ICategoryProps from "./props";
import { tabBar } from "./data";
import "./styles.scss";
import { AnimationCategory, TitleBlock, ArrowTitle } from "..";
import { IMAGES } from "../../assets";
import { useIsSmallerDimension } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";
import { NabBarItem } from "../NavBarItem";

export const Category: FC<ICategoryProps> = () => {
  const isSmallScreen = useIsSmallerDimension(DimensionTypes.Category);

  return (
    <div className="category">
      <div className="wrapp">
        {!isSmallScreen && (
          <ArrowTitle text="This is category" img={IMAGES.ARROW_RIGHT} />
        )}
        {isSmallScreen ? (
          <>
            <img
              className="mobile_phone_img"
              src={IMAGES.MOB_CATEGORY}
              alt=""
            />
            <span className="description_text">1 - This is category </span>
            <span className="description_text">2 - Card of the restaurant</span>
            <span className="description_text">3 - Tab bar</span>
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
        {!isSmallScreen && (
          <ArrowTitle
            paddingText
            text="Card of the restaurant"
            img={IMAGES.ARROW_LEFT}
            arrowStyle={{ position: "absolute", left: "120px", top: "-25px" }}
          />
        )}
        {!isSmallScreen && (
          <div className="tab_bar_items">
            <img src={IMAGES.ARROW} alt="" />
            {tabBar.map((item, index) => (
              <NabBarItem img={item.img} name={item.name} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
