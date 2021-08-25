import { FC } from "react";

import IAdminPanelProps from "./props";
import "./styles.scss";
import { Orders, TitleBlock, Menu, Staff } from "..";
import { DimensionTypes } from "../../utils/constants";
import { useIsSmallerDimension } from "../../utils/hooks";

export const AdminPanel: FC<IAdminPanelProps> = () => {
  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Order);

  return (
    <div className="admin_panel">
      <TitleBlock
        center
        maxWidth={996}
        title="Admin Panel"
        description="Lorem ipsum dolor sit amet, consectetur
         adipiscing elit jklhvkjvf kdvjcospckb kscihoasjc
          schisdchdsioc kchwejoceqow dhvokecowjcf akichjk"
      />
      <Orders />
      <Menu />
      {!isSmallDimension && <Staff />}
    </div>
  );
};
