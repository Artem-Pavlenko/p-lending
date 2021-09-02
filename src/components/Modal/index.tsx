import { FC, useEffect, useState } from "react";

import IModalProps from "./props";
import { POS, venueTypes } from "./data";
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
  const [errorTrigger, setErrorTrigger] = useState(false);

  const isSmallDimension = useIsSmallerDimension(DimensionTypes.Tablet);
  const isPhoneDimension = useIsSmallerDimension(DimensionTypes.Phone);

  const submitHandler = async () => {
    if (
      restaurantName &&
      positionAtVenue &&
      address &&
      websiteUrl &&
      partnerName &&
      checkedVenue &&
      checkedSort
    ) {
      const res = await addPartner({
        address,
        partnerName,
        positionAtVenue,
        restaurantName,
        websiteUrl,
        venueType: checkedVenue,
        posType: checkedSort,
      });

      if (res?._id) {
        setAddress("");
        setCheckedSort("");
        setCheckedVenue("");
        setRestaurantName("");
        setPartnerName("");
        setWebsiteUrl("");
        setPositionAtVenue("");
        // onClose();
      } else if (res?.error?.message) {
        console.log("E R R O R ->", res.error.message);
      }
      onClose();
    } else {
      setErrorTrigger(true);
    }
  };

  useEffect(() => {
    if (showModal && !isSmallDimension) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
      setErrorTrigger(false);
    };
  }, [showModal, isSmallDimension]);

  return (
    <div onClick={onClose} className={`modal_wrapper ${showModal && "active"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal_content ${showModal && "active"}`}
      >
        <div className="close_button" onClick={onClose} />

        <Text type={TextStyles.ModalHeader}>Join us!</Text>

        <div className="form">
          {isPhoneDimension ? (
            <>
              <Input
                value={partnerName}
                onChange={setPartnerName}
                title="Name"
                placeholder="Name"
                required={errorTrigger && !partnerName.trim()}
              />

              <div className="fields_wrapper">
                <Input
                  value={positionAtVenue}
                  onChange={setPositionAtVenue}
                  title="Position at the Venue"
                  placeholder="Position"
                  required={errorTrigger && !positionAtVenue.trim()}
                />
                <Input
                  value={restaurantName}
                  onChange={setRestaurantName}
                  title="Name of Venue"
                  placeholder="Name"
                  required={errorTrigger && !restaurantName.trim()}
                />
                <DropDownList
                  title="Type of venue"
                  list={venueTypes}
                  checked={checkedVenue}
                  setChecked={setCheckedVenue}
                />
                <div className="border" />

                <Input
                  value={address}
                  onChange={setAddress}
                  title="Address"
                  placeholder="Address"
                  required={errorTrigger && !address.trim()}
                />

                <Input
                  value={websiteUrl}
                  onChange={setWebsiteUrl}
                  title="Website"
                  placeholder="Website"
                  required={errorTrigger && !websiteUrl.trim()}
                />

                <DropDownList
                  title="What sort of POS do you have ?"
                  list={POS}
                  checked={checkedSort}
                  setChecked={setCheckedSort}
                />
              </div>
            </>
          ) : (
            <>
              <Input
                value={partnerName}
                onChange={setPartnerName}
                title="Name"
                placeholder="Name"
                required={errorTrigger && !partnerName.trim()}
              />
              <div className="fields_wrapper">
                <Input
                  value={positionAtVenue}
                  onChange={setPositionAtVenue}
                  title="Position at the Venue"
                  placeholder="Position"
                  required={errorTrigger && !positionAtVenue.trim()}
                />
                <Input
                  value={address}
                  onChange={setAddress}
                  title="Address"
                  placeholder="Address"
                  required={errorTrigger && !address.trim()}
                />
                <Input
                  value={restaurantName}
                  onChange={setRestaurantName}
                  title="Name of Venue"
                  placeholder="Name"
                  required={errorTrigger && !restaurantName.trim()}
                />
                <Input
                  value={websiteUrl}
                  onChange={setWebsiteUrl}
                  title="Website"
                  placeholder="Website"
                  required={errorTrigger && !websiteUrl.trim()}
                />
                <DropDownList
                  title="Type of venue "
                  list={venueTypes}
                  checked={checkedVenue}
                  setChecked={setCheckedVenue}
                  required={errorTrigger && !checkedVenue.trim()}
                />
                <DropDownList
                  title="What sort of POS do you have ?"
                  list={POS}
                  checked={checkedSort}
                  setChecked={setCheckedSort}
                  required={errorTrigger && !checkedSort.trim()}
                />
              </div>
            </>
          )}

          <Button className="center" text="Join us" onClick={submitHandler} />
        </div>

        <img className="leaf" src={IMAGES.LEAF} alt="" />
        <img className="bamboo" src={IMAGES.BAMBOO} alt="" />
      </div>
    </div>
  );
};
