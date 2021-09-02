import { FC, useState } from "react";
import { useOutsideListener } from "../../utils/hooks";

import IDropDownListProps from "./props";
import "./styles.scss";

export const DropDownList: FC<IDropDownListProps> = ({
  title,
  list,
  checked,
  setChecked,
  required,
}) => {
  const [showList, setShowList] = useState(false);

  const wrapperRef = useOutsideListener<HTMLDivElement>(() =>
    setShowList(false)
  );

  const listVisibilityHandler = () => setShowList(!showList);
  const onCheckedItem = (item: string) => {
    setChecked(item);
    setShowList(false);
  };

  return (
    <div ref={wrapperRef} className="drop_down_list">
      <div onClick={listVisibilityHandler} className="checked_wrapper">
        <span className="title">{title}</span>
        <span className={`checked_item ${required && "required"}`}>
          {checked}
        </span>
        {required && <span className="error">required field</span>}
      </div>

      <ul className={`list ${showList && "show"}`}>
        {list.map((item, index) => (
          <li key={index + item} onClick={() => onCheckedItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
