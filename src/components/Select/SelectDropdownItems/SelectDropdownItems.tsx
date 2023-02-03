import React, {useContext} from 'react';
import s from "../Select.module.scss";
import DropdownItem from "../DropdownItem/DropdownItem";
import {SelectContext} from "../Select";

function SelectDropdownItems() {
  const context = useContext(SelectContext)
  const data = "data" in context ? context.data : [];

  return (
    <div className={s.items}>
      {data.map(({id, img, value, checked}) => (
        <DropdownItem key={id} id={id} img={img} value={value} checked={checked}/>
      ))}
    </div>
  );
}

export default SelectDropdownItems;
