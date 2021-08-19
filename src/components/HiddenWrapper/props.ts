import { CSSProperties } from "react";

export default interface IHiddenWrapperProps {
  setHover: (isMouseMove: boolean) => void;
  style: CSSProperties;
}
