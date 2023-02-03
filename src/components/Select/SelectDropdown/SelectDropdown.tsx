import React from 'react';
import s from "./selectDropdown.module.scss";
import SelectSearch from "../SelectSearch/SelectSearch";
import SelectDropdownItems from "../SelectDropdownItems/SelectDropdownItems";

interface ISelectDropdown {
  view: boolean
}

function SelectDropdown({view}: ISelectDropdown) {
  const menuStyle = view ? {maxHeight: '10000px', opacity: '1', Visibility: 'visible'} : {maxHeight: '0px', opacity: '0', Visibility: 'hidden'}

  return (
    <div className={s.menu} style={menuStyle}>
      <SelectSearch/>
      <SelectDropdownItems/>
    </div>
  );
}

export default SelectDropdown;
