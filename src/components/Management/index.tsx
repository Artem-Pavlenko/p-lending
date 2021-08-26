import { FC } from "react";

import IManagementProps from "./props";
import "./styles.scss";
import { AnimationManagement, TitleBlock, ArrowTitle } from "..";
import { IMAGES } from "../../assets";
import { useIsSmallerDimension } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";

export const Management: FC<IManagementProps> = () => {
  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Management);

  return (
    <div className="management">
      {isSmallDimension ? (
        <div className="wrapper">
          <img className="mobile_phone_img" src={IMAGES.MOB_ORDER} alt="" />
          <span className="description_text">1 - Restaurant bill</span>
          <span className="description_text">2 - Vouchers</span>
        </div>
      ) : (
        <AnimationManagement />
      )}

      <div className="description_block">
        <TitleBlock
          marginBottom={100}
          title="Active bill"
          description="Within the Table Management screen, you will find the active bill Tab - this is the current bill that is yet to be paid "
        />
        {!isSmallDimension && (
          <ArrowTitle
            alignItem
            text="Restaurant bill"
            img={IMAGES.ARROW}
            arrowStyle={{
              position: "absolute",
              top: "-80px",
              left: "-100px",
              width: "82px",
              height: "23.5px",
              transform: "rotate(-160deg)",
            }}
            blockStyle={{ marginBottom: "110px" }}
          />
        )}

        {!isSmallDimension && (
          <ArrowTitle
            alignItem
            text="Vouchers"
            img={IMAGES.ARROW_TOP}
            arrowStyle={{
              position: "absolute",
              width: "76px",
              height: "76px",
              top: "-90px",
              left: "-100px",
              transform: "rotate(-30deg)",
            }}
          />
        )}
      </div>
    </div>
  );
};
