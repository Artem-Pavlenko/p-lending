import { FC, useState } from "react";

import IMenuProps from "./props";
import "./styles.scss";
import { ArrowTitle, HiddenWrapper } from "..";
import { IMAGES } from "../../assets";
import { useIsSmallerDimension } from "../../utils/hooks";
import { DimensionTypes } from "../../utils/constants";

export const Menu: FC<IMenuProps> = () => {
  const [isHoverMain, setIsHoverMain] = useState(false);
  const [isHoverSold, setIsHoverSold] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isHoverDiscount, setIsHoverDiscount] = useState(false);
  const [isHoverItem, setIsHoverItem] = useState(false);

  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Order);

  return (
    <div className="admin_panel_block menu_block">
      <img src={IMAGES.MENU} alt="2.Menu" className="img" />

      {isSmallDimension ? (
        <div className="menu_wrapper">
          <img src={IMAGES.MOB_MENU_1} alt="" className="menu_1" />

          {/* sold out block */}
          <p>Sold out</p>
          <span className="menu_description">
            here you can indicate a sold-out item
          </span>
          <div className="img_wrapper">
            <img src={IMAGES.MOB_ARROW_SOLD} alt="" className="sold_arrow" />
            <div className="yellow_ellipse" />
            <img src={IMAGES.MOB_MENU_2} alt="" className="main_img" />
          </div>

          {/* discount block */}
          <div className="img_wrapper">
            <img src={IMAGES.MOB_MENU_3} alt="" className="main_img sale" />
            <img
              src={IMAGES.MOB_ARROW_DISCOUNT}
              alt=""
              className="discount_arrow"
            />
            <div className="yellow_ellipse sale" />
          </div>
          <p className="discount">Discount</p>
          <span className="menu_description">Discounted items</span>

          {/* menu category block */}
          <div className="img_wrapper discount">
            <img src={IMAGES.MOB_MENU_4} alt="" className="main_img category" />

            <div className="yellow_ellipse tab_bar" />

            <img
              src={IMAGES.MOB_ARROW_CATEGORY}
              alt=""
              className="category_arrow"
            />
          </div>
          <p className="menu_category_title">Menu category</p>
          <span className="menu_description menu_category_description">
            these are the different menu categories
          </span>

          {/* menu item block */}
          <div className="img_wrapper discount">
            <img src={IMAGES.MOB_MENU_5} alt="" className="main_img menu_tem" />

            <div className="yellow_ellipse menu_item" />

            <img src={IMAGES.MOB_ARROW_ITEM2} alt="" className="item_arrow" />
          </div>
          <p>Menu item</p>
          <span className="menu_description">
            This highlights each menu items and all the ingredients
          </span>
        </div>
      ) : (
        <>
          <div className="screen_wrapper">
            <ArrowTitle
              text="Menu Photo"
              description="Add /Change the main Menu photo here"
              img={IMAGES.ARROW_MAIN}
              hover={isHoverMain}
              blockStyle={{
                position: "absolute",
                top: "-170px",
                left: "400px",
              }}
              arrowStyle={{
                position: "absolute",
                top: "95px",
                left: "239px",
                width: "210px",
                height: "210px",
              }}
            />

            <ArrowTitle
              text="Sold out"
              description="here you can indicate a sold-out item"
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
              description="These are the different menu categories"
              img={IMAGES.ARROW_MENU}
              hover={isHoverMenu}
              blockStyle={{
                position: "absolute",
                bottom: "-132px",
                left: "38px",
              }}
              arrowStyle={{
                position: "absolute",
                top: "-215px",
                left: "209px",
                width: "185px",
                height: "185px",
              }}
            />
            <ArrowTitle
              text="Discount"
              description="Discounted items"
              img={IMAGES.ARROW_DISCOUNT}
              hover={isHoverDiscount}
              blockStyle={{
                position: "absolute",
                bottom: "-90px",
                left: "400px",
              }}
              arrowStyle={{
                position: "absolute",
                top: "-375px",
                left: "97px",
                width: "330px",
                height: "330px",
              }}
            />
            <ArrowTitle
              text="Menu items"
              description="This highlights each menu items and all the ingredients"
              img={IMAGES.ARROW_MENU_ITEM}
              hover={isHoverItem}
              blockStyle={{
                position: "absolute",
                bottom: "-145px",
                right: "220px",
              }}
              arrowStyle={{
                position: "absolute",
                top: "-168px",
                left: "198px",
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
        </>
      )}
    </div>
  );
};
