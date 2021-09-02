import { FC, useState } from "react";

import IStaffProps from "./props";
import "./styles.scss";
import { ArrowTitle, HiddenWrapper } from "..";
import { IMAGES } from "../../assets";

export const Staff: FC<IStaffProps> = () => {
  const [isHoverManager, setIsHoverManager] = useState(false);
  const [isHoverAddStaff, setIsHoverAddStaff] = useState(false);
  const [isHoverWaiters, setIsHoverWaiters] = useState(false);

  return (
    <div className="admin_panel_block staff_block">
      <img src={IMAGES.STAFF} alt="3.Staff" className="img" />
      <div className="screen_wrapper">
        <ArrowTitle
          text="General manager"
          description="This would be the super user for the Admin panel"
          img={IMAGES.ARROW_GENERAL}
          hover={isHoverManager}
          blockStyle={{
            position: "absolute",
            top: "-170px",
            left: "325px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "95px",
            left: "155px",
            width: "290px",
            height: "290px",
          }}
        />
        <ArrowTitle
          text="Add staff"
          description="Here the General Manager can add new staff members"
          img={IMAGES.ARROW_ADD_STAFF}
          hover={isHoverAddStaff}
          blockStyle={{
            position: "absolute",
            top: "-130px",
            right: "206px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "78px",
            left: "60px",
            width: "277px",
            height: "277px",
          }}
        />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitle/> */}
        <HiddenWrapper
          setHover={setIsHoverManager}
          style={{
            top: "244px",
            left: "320px",
            width: "305px",
            height: "75px",
            borderRadius: "15px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverAddStaff}
          style={{
            top: "247px",
            right: "65px",
            width: "115px",
            height: "65px",
            borderRadius: "10px",
          }}
        />

        <img src={IMAGES.STAFF_SCREEN} alt="" />

        <ArrowTitle
          text="Waiters"
          description="These are all the waiters that have been added and currently working at the venue."
          img={IMAGES.ARROW_WAITERS}
          hover={isHoverWaiters}
          blockStyle={{
            position: "absolute",
            bottom: "-190px",
            left: "200px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-195px",
            left: "197px",
            width: "227px",
            height: "218px",
          }}
        />
        <img className="waiters_arrow" src={IMAGES.ARROW_WAITERS_2} alt="" />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitle/> */}
        <HiddenWrapper
          setHover={setIsHoverWaiters}
          style={{
            bottom: "97px",
            left: "323px",
            width: "618px",
            height: "75px",
            borderRadius: "15px",
          }}
        />
      </div>
    </div>
  );
};
