import React, {useContext} from 'react';
import {SelectContext} from "../Select";
import s from "../SelectField/SelectField.module.scss";
import cross from "../../../assets/img/svg/cross.svg";

interface ISelectValueProps {
  id: string,
  value: string,
}

function SelectValue({id, value}: ISelectValueProps) {
  const context = useContext(SelectContext);
  const multiSelect = "multiSelect" in context ? context.multiSelect : true;
  const onCrossClick = "onCrossClick" in context ? context.onCrossClick : undefined;

  return (
    <>
      {multiSelect ?
        <div key={id} className={s.value}>
          <span>{value}</span>
          <img className={'cross'} src={cross} alt="cross" onClick={() => onCrossClick ? onCrossClick(id) : ''}/>
        </div>
        :
        <span>{value}</span>}
    </>
  );
}

export default SelectValue;
