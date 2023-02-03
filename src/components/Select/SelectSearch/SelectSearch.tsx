import React, {useContext} from 'react';
import s from "./SelectSearch.module.scss";
import search from "../../../assets/img/svg/search.svg";
import {SelectContext} from "../Select";

function SelectSearch() {
  const context = useContext(SelectContext);
  const onChange = 'onSearchChange' in context ? context.onSearchChange : undefined;
  const searchValue = 'searchValue' in context ? context.searchValue : '';

  return (
    <div className={s.search}>
      <img className={s.search__icon} src={search} alt="search"/>
      <input
        className={s.search__inp}
        type="text" value={searchValue}
        placeholder={'Поиск'}
        onChange={(e) => onChange ? onChange(e) : ''}/>
    </div>
  );
}

export default SelectSearch;
