import { FC } from "react";

import IFilterBlockProps from "./props";
import "./styles.scss";
import { TitleBlock, Filter, ArrowTitle, AnimationTabBar } from "..";
import { IMAGES } from "../../assets";
import { useIsSmallerDimension } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";

export const FilterBlock: FC<IFilterBlockProps> = () => {
  const isSmallScreen = useIsSmallerDimension(DimensionTypes.Filter);

  return (
    <div className="filter-block">
      <div className="description-block">
        <div className="tab_bar_animation">
          <TitleBlock
            title="Menu"
            description="On the menu page, you can filter by Allergies and food types plus add items to the cart"
          />

          {!isSmallScreen && <AnimationTabBar />}
        </div>

        {!isSmallScreen && (
          <ArrowTitle
            text="Filter"
            img={IMAGES.ARROW_RIGHT}
            arrowStyle={{
              width: "62px",
              height: "62px",
            }}
          />
        )}
      </div>

      {isSmallScreen ? (
        <>
          <img className="mobile_phone_img" src={IMAGES.MOB_MENU} alt="" />
          <span className="description_text">1 - Filter</span>
          <span className="description_text">
            2 - <span className="red_text">SOLD OUT</span> Item
          </span>
          <span className="description_text">3 - Tab bar menu</span>
          <span className="description_text">4 - Discount</span>
          <span className="description_text">5 - Menu item</span>
        </>
      ) : (
        <Filter />
      )}
    </div>
  );
};
