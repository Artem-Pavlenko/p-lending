import { FC, useEffect } from "react";

import IModalProps from "./props";
import "./styles.scss";

export const Modal: FC<IModalProps> = ({ showModal, onClose }) => {
  useEffect(() => {
    if (showModal) {
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
      <div className={`modal_content ${showModal && "active"}`}></div>
    </div>
  );
};
