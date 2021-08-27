import { FC, FormEvent, useEffect, useState } from "react";

import IModalProps from "./props";
import "./styles.scss";
import { Input, Text, Button, DropDownList } from "..";
import { IMAGES } from "../../assets";
import { DimensionTypes, TextStyles } from "../../utils/constants";
import { useIsSmallerDimension } from "../../utils/hooks";
import { addPartner } from "../../utils/api";

export const Modal: FC<IModalProps> = ({ showModal, onClose }) => {
  const [restaurantName, setRestaurantName] = useState("");
  const [positionAtVenue, setPositionAtVenue] = useState("");
  const [address, setAddress] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [checkedVenue, setCheckedVenue] = useState("");
  const [checkedSort, setCheckedSort] = useState("");

  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Tablet);

  const list1 = ["Type", "Type2", "Type3"];

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    addPartner({
      address,
      partnerName,
      positionAtVenue,
      restaurantName,
      websiteUrl,
      venueType: checkedVenue,
      posType: checkedSort,
    });
  };

  useEffect(() => {
    if (showModal && !isSmallDimension) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div onClick={onClose} className={`modal_wrapper ${showModal && "active"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal_content ${showModal && "active"}`}
      >
        <div className="close_button" onClick={onClose} />

        <Text type={TextStyles.ModalHeader}>Join us!</Text>

        <form onSubmit={submitHandler}>
          <Input
            value={partnerName}
            onChange={setPartnerName}
            title="Name"
            placeholder="Name"
          />

          <div className="fields_wrapper">
            <Input
              value={positionAtVenue}
              onChange={setPositionAtVenue}
              title="Position at the Venue"
              placeholder="Position"
            />
            <Input
              value={address}
              onChange={setAddress}
              title="Address"
              placeholder="Address"
            />
            <Input
              value={restaurantName}
              onChange={setRestaurantName}
              title="Name of Restaurants"
              placeholder="Name"
            />
            <Input
              value={websiteUrl}
              onChange={setWebsiteUrl}
              title="Website"
              placeholder="Website"
            />
            <DropDownList
              title="Type of venue "
              list={list1}
              checked={checkedVenue}
              setChecked={setCheckedVenue}
            />
            <DropDownList
              title="What sort of POS do you have ?"
              list={list1}
              checked={checkedSort}
              setChecked={setCheckedSort}
            />
          </div>
          <Button className="center" text="Join us" onClick={() => {}} />
        </form>

        <img className="leaf" src={IMAGES.LEAF} alt="" />
        <img className="bamboo" src={IMAGES.BAMBOO} alt="" />
      </div>
    </div>
  );
};
