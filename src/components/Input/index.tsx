import { ChangeEvent, FC } from "react";

import IInputProps from "./props";
import "./styles.scss";

export const Input: FC<IInputProps> = ({
  title,
  onChange,
  required,
  ...restProps
}) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value);

  return (
    <div className="input_wrapper">
      <span className="input_title">{title}</span>
      <input
        className={`${required && "red"}`}
        onChange={changeHandler}
        {...restProps}
      />
      {required && <span className="error">required field</span>}
    </div>
  );
};
