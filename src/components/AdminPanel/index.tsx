import { FC } from "react";

import IAdminPanelProps from "./props";
import "./styles.scss";
import { Orders, TitleBlock, Menu, Staff } from "..";

export const AdminPanel: FC<IAdminPanelProps> = () => {
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
      <Staff />
    </div>
  );
};
