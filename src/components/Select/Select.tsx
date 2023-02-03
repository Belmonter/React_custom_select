import React, {createContext, useState} from 'react';
import s from './Select.module.scss'
import SelectLabel from "./SelectLabel/SelectLabel";
import SelectField from "./SelectField/SelectField";
import SelectDropdown from "./SelectDropdown/SelectDropdown";
import {ISelectContext, ISelectData, ISelectProps} from "./types";

export const SelectContext = createContext<ISelectContext | {}>({})

function Select({label, selectData, icons, multiSelect}: ISelectProps) {
  const [data, setData] = useState<ISelectData[]>(selectData)
  const [selectedData, setSelectedData] = useState<ISelectData[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [view, setView] = useState(false);

  const onChangeData = (id: string, value: string, checked: boolean) => {
    let result: ISelectData[] = data.map((el) => {
      if (multiSelect) {
        if (el['id'] === id) el['checked'] = !checked
        return el
      } else {
        el['id'] === id ? el['checked'] = !checked : el['checked'] = false
        return el
      }
    })

    let checkedValues = result.filter(el => el['checked'])
    if (checkedValues.length >= 0) setSelectedData(checkedValues)
    setData(result);
  }

  const onCrossClick = (id: string) => {
    setSelectedData(selectedData => selectedData.filter(el => el['id'] !== id))
    setData(data => data.map(el => {
      if (el['id'] === id) el["checked"] = false
      return el
    }))
  }

  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let elClass = (e.target as Element).classList.value

    if (elClass !== 'cross') {
      setView(view => !view);
    }
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const contextData: ISelectContext = {
    'data': data,
    'onChangeData': onChangeData,
    'onSearchChange': onSearchChange,
    'searchValue': searchValue,
    'icons': icons,
    'multiSelect': multiSelect,
    'onCrossClick': onCrossClick,
  }

  return (
    <SelectContext.Provider value={contextData}>
      <div className={s.wrapper}>
        <div className={s.select__wrapper}>
          <SelectLabel label={label}/>
          <SelectField selectedData={selectedData} view={view} setView={setView} onSelectClick={onSelectClick}/>
        </div>
        <SelectDropdown view={view}/>
      </div>
    </SelectContext.Provider>
  );
}

export default Select;
