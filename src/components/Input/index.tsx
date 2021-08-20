import { ChangeEvent, FC } from "react";

import IInputProps from "./props";
import "./styles.scss";

export const Input: FC<IInputProps> = ({ title, onChange, ...restProps }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value);

  return (
    <div className="input_wrapper">
      <span className="input_title">{title}</span>
      <input onChange={changeHandler} {...restProps} />
    </div>
  );
};
