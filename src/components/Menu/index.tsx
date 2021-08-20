import { FC, useState } from "react";

import IMenuProps from "./props";
import "./styles.scss";
import { ArrowTitle, HiddenWrapper } from "..";
import { IMAGES } from "../../assets";

export const Menu: FC<IMenuProps> = () => {
  const [isHoverMain, setIsHoverMain] = useState(false);
  const [isHoverSold, setIsHoverSold] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isHoverDiscount, setIsHoverDiscount] = useState(false);
  const [isHoverItem, setIsHoverItem] = useState(false);

  return (
    <div className="admin_panel_block">
      <img src={IMAGES.MENU} alt="2.Menu" className="img" />
      <div className="screen_wrapper">
        <ArrowTitle
          text="Main restaurant photo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_MAIN}
          hover={isHoverMain}
          blockStyle={{
            position: "absolute",
            top: "-170px",
            left: "300px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "95px",
            left: "339px",
            width: "210px",
            height: "210px",
          }}
        />

        <ArrowTitle
          text="Sold out"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_SOLD}
          hover={isHoverSold}
          blockStyle={{
            position: "absolute",
            top: "-170px",
            right: "206px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "121px",
            left: "60px",
            width: "400px",
            height: "400px",
          }}
        />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitle/> */}
        <HiddenWrapper
          setHover={setIsHoverMain}
          style={{
            top: "155px",
            left: "376px",
            width: "825px",
            height: "160px",
            borderRadius: "15px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverSold}
          style={{
            top: "340px",
            right: "115px",
            width: "405px",
            height: "110px",
            borderRadius: "10px",
          }}
        />

        <img src={IMAGES.MENU_SCREEN} alt="" />

        <ArrowTitle
          text="Menu category"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          img={IMAGES.ARROW_MENU}
          hover={isHoverMenu}
          blockStyle={{
            position: "absolute",
            bottom: "-150px",
            left: "40px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-188px",
            left: "209px",
            width: "185px",
            height: "185px",
          }}
        />
        <ArrowTitle
          text="Discount"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          img={IMAGES.ARROW_DISCOUNT}
          hover={isHoverDiscount}
          blockStyle={{
            position: "absolute",
            bottom: "-150px",
            left: "400px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-371px",
            left: "97px",
            width: "330px",
            height: "330px",
          }}
        />
        <ArrowTitle
          text="Menu item"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_MENU_ITEM}
          hover={isHoverItem}
          blockStyle={{
            position: "absolute",
            bottom: "-150px",
            right: "220px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-166px",
            left: "197px",
            width: "120px",
            height: "120px",
          }}
        />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitle/> */}
        <HiddenWrapper
          setHover={setIsHoverMenu}
          style={{
            bottom: "110px",
            left: "310px",
            width: "45px",
            height: "45px",
            borderRadius: "35px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverDiscount}
          style={{
            bottom: "255px",
            left: "697px",
            width: "45px",
            height: "45px",
            borderRadius: "35px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverItem}
          style={{
            bottom: "88px",
            right: "115px",
            width: "410px",
            height: "130px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};
