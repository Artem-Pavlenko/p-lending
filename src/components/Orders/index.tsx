import { FC, useState } from "react";

import IOrdersProps from "./props";
import "./styles.scss";
import { ArrowTitle, HiddenWrapper } from "..";
import { IMAGES } from "../../assets";

export const Orders: FC<IOrdersProps> = () => {
  const [isHoverTabBar, setIsHoverTabBar] = useState(false);
  const [isHoverFlter, setIsHoverFilter] = useState(false);
  const [isHoverPick, setIsHoverPick] = useState(false);
  const [isHoverChat, setIsHoverChat] = useState(false);
  const [isHoverOrder, setIsHoverOrder] = useState(false);
  const [isHoverCheck, setIsHoverCheck] = useState(false);
  const [isHoverBill, setIsHoverBill] = useState(false);

  return (
    <div className="admin_panel_block">
      <img src={IMAGES.ORDERS} alt="1.Orders" className="img" />
      <div className="orders_screen_wrapper">
        <ArrowTitle
          text="Tab bar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_TAB_BAR}
          hover={isHoverTabBar}
          blockStyle={{
            position: "absolute",
            top: "-195px",
            left: "65px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "110px",
            left: "50px",
            height: "121px",
          }}
        />
        <ArrowTitle
          text="Filter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_FILTER}
          hover={isHoverFlter}
          blockStyle={{
            position: "absolute",
            top: "-215px",
            left: "440px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "63px",
            left: "-77px",
            height: "229px",
          }}
        />
        <ArrowTitle
          text="Pick to order"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_PICK}
          hover={isHoverPick}
          blockStyle={{
            position: "absolute",
            top: "-195px",
            right: "340px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "73px",
            left: "-7px",
            width: "289px",
            height: "308px",
          }}
        />
        <ArrowTitle
          text="Chat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_CHAT}
          hover={isHoverChat}
          blockStyle={{
            position: "absolute",
            top: "-215px",
            right: "70px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "115px",
            left: "35px",
            width: "289px",
            height: "308px",
          }}
        />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitile/> */}
        <HiddenWrapper
          setHover={setIsHoverTabBar}
          style={{
            top: "7px",
            left: "20px",
            width: "210px",
            height: "800px",
            borderRadius: "20px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverFilter}
          style={{
            top: "100px",
            left: "345px",
            width: "90px",
            height: "60px",
            borderRadius: "15px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverPick}
          style={{
            top: "210px",
            right: "300px",
            width: "125px",
            height: "110px",
            borderRadius: "35px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverChat}
          style={{
            top: "240px",
            right: "100px",
            width: "60px",
            height: "60px",
            borderRadius: "35px",
          }}
        />

        <img className="order_screen" src={IMAGES.ORDERS_SCREEN} alt="" />

        <ArrowTitle
          text="Tab bar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_TAB_BAR}
          hover={isHoverTabBar}
          blockStyle={{
            position: "absolute",
            top: "-195px",
            left: "65px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "110px",
            left: "50px",
            height: "121px",
          }}
        />
        <ArrowTitle
          text="Order"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_ORDER}
          hover={isHoverOrder}
          blockStyle={{
            position: "absolute",
            bottom: "-215px",
            left: "40px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-715px",
            left: "-162px",
            width: "700px",
            height: "700px",
          }}
        />
        <ArrowTitle
          text="Check"
          description="Assign table to waiter"
          img={IMAGES.ARROW_CHECK}
          hover={isHoverCheck}
          blockStyle={{
            position: "absolute",
            bottom: "-150px",
            left: "400px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-280px",
            left: "-162px",
            width: "230px",
            height: "230px",
          }}
        />
        <ArrowTitle
          text="Bill"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
          img={IMAGES.ARROW_BILL}
          hover={isHoverBill}
          blockStyle={{
            position: "absolute",
            bottom: "-215px",
            right: "370px",
          }}
          arrowStyle={{
            position: "absolute",
            top: "-237px",
            left: "156px",
            width: "220px",
            height: "220px",
          }}
        />

        {/* that when you hover the mouse over the area, the text is highlighted in <ArrowTitile/> */}
        <HiddenWrapper
          setHover={setIsHoverBill}
          style={{
            bottom: "80px",
            right: "190px",
            width: "45px",
            height: "45px",
            borderRadius: "35px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverCheck}
          style={{
            bottom: "145px",
            left: "245px",
            width: "45px",
            height: "45px",
            borderRadius: "35px",
          }}
        />
        <HiddenWrapper
          setHover={setIsHoverOrder}
          style={{
            top: "210px",
            left: "299px",
            width: "390px",
            height: "95px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};
