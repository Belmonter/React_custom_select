import React from 'react';
import s from "./SelectLabel.module.scss";

interface ILabelProps {
  label: string
}

function SelectLabel({label}: ILabelProps) {
  return (
    <div className={s.label}>{label}</div>
  );
}

export default SelectLabel;
