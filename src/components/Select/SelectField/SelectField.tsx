import React from 'react';
import s from "./SelectField.module.scss";
import arrow from "../../../assets/img/svg/sel_arrow.svg";
import {ISelectData} from "../types";
import SelectValue from "../SelectValue/SelectValue";

interface ISelectFieldProps {
  selectedData: ISelectData[],
  setView: Function,
  view: boolean,
  onSelectClick: Function,
}

function SelectField({selectedData, onSelectClick, view}: ISelectFieldProps) {
  const arrowStyle = view ? {transform: 'rotate(360deg)'} : {transform: 'rotate(180deg)'}

  return (
    <div className={s.select} onClick={(e) => onSelectClick(e)}>
      {selectedData.length <= 0 && <span>Выберите язык</span>}
      <div className={s.values}>
        {selectedData.length > 0 && selectedData.map(({value, id}) => (
          <SelectValue value={value} id={id}/>
        ))}
      </div>
      <div className={s.arrow} style={arrowStyle}><img src={arrow} alt="select arrow"/></div>
    </div>
  );
}

export default SelectField;
