import { FC } from "react";

import IManagementProps from "./props";
import "./styles.scss";
import { AnimationManagement } from "..";
import { TitleBlock } from "../Title";
import { ArrowTitle } from "../ArrowTitle";
import { IMAGES } from "../../assets";

export const Management: FC<IManagementProps> = () => {
  return (
    <div className="management">
      <AnimationManagement />
      <div className="description_block">
        <TitleBlock
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur
           adipiscing elit jklhvkjvf kdvjcospckb kscihoasjc
            schisdchdsioc kchwejoceqow dhvokecowjcf akichjk"
        />
        <ArrowTitle
          alignAtem
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
          blockStyle={{ marginBottom: "147px" }}
        />
        <ArrowTitle
          alignAtem
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
      </div>
    </div>
  );
};
