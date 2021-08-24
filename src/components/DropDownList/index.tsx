import { FC, useState } from "react";
import { useOutsideListener } from "../../utils/hooks";

import IDropDownListProps from "./props";
import "./styles.scss";

export const DropDownList: FC<IDropDownListProps> = ({
  title,
  list,
  checked,
  setChecked,
}) => {
  const [showList, setShowList] = useState(false);

  const wrapperRef = useOutsideListener<HTMLUListElement>(() =>
    setShowList(false)
  );

  const listVisibilityHandler = () => setShowList((prevState) => !prevState);
  const onCheckedItem = (item: string) => {
    setChecked(item);
    setShowList(false);
  };

  return (
    <div className="drop_down_list">
      <div className="checked_wrapper">
        <span className="title">{title}</span>
        <span onClick={listVisibilityHandler} className="checked_item">
          {checked}
        </span>
      </div>

      <ul ref={wrapperRef} className={`list ${showList && "show"}`}>
        {list.map((item, index) => (
          <li key={index + item} onClick={() => onCheckedItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
