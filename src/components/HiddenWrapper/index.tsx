import { FC } from "react";

import IHiddenWrapperProps from "./props";
import "./styles.scss";

export const HiddenWrapper: FC<IHiddenWrapperProps> = ({ style, setHover }) => {
  const onMouseMoveHandler = () => setHover(true);
  const onMouseOutHandler = () => setHover(false);

  return (
    <div
      className="hidden_wrapper"
      onMouseMove={onMouseMoveHandler}
      onMouseOut={onMouseOutHandler}
      style={style}
    />
  );
};
