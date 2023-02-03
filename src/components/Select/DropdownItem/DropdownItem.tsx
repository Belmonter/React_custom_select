import React, {useContext} from 'react';
import s from "./dropdownItem.module.scss";
import russia from "../../../assets/img/svg/russia.svg";
import {SelectContext} from "../Select";

interface IDropdownItemProps {
  id: string,
  img: string,
  value: string,
  checked: boolean,
}

function DropdownItem({id, img, value, checked}: IDropdownItemProps) {

  const context = useContext(SelectContext);
  const onChange = "onChangeData" in context ? context.onChangeData : undefined;
  const searchValue = "searchValue" in context ? context.searchValue : '';
  const itemView = value.toLowerCase().startsWith(searchValue.toLowerCase());
  const icons = "icons" in context ? context.icons : true;

  return (
    <div className={s.item} style={itemView ? {display: "block"} : {display: "none"}}>
      <div className={s.item__wrapper}>
        <div className={s.item__info}>
          {icons &&
          <img className={s.item__img} src={img} alt={'russia'}/>
          }
          <div className={s.item__text}>{value}</div>
        </div>
        <div className={s.item__checkbox}>
          <div className={s.checkbox}>
            <input className={s.checkbox__input}
                   id={id}
                   checked={checked}
                   type="checkbox"
                   value={id}
                   onChange={(e) => onChange ? onChange(id, value, checked, e) : ''}/>
            <label className={s.checkbox__label} htmlFor={id}></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
