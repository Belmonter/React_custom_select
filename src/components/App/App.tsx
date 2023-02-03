import React from 'react';
import Select from "../Select/Select";
import russia from '../../assets/img/svg/russia.svg'
import greatBritain from '../../assets/img/svg/greatBritain.svg'
import spain from '../../assets/img/svg/spain.svg'
import germany from '../../assets/img/svg/germany.svg'
import italy from '../../assets/img/svg/italy.svg'
import poland from '../../assets/img/svg/poland.svg'

function App() {

  const selectData = [
    {id: '1', img: russia, value: 'Русский', checked: false},
    {id: '2', img: greatBritain, value: 'Английский', checked: false},
    {id: '3', img: spain, value: 'Испанский', checked: false},
    {id: '4', img: germany, value: 'Немецкий', checked: false},
    {id: '5', img: italy, value: 'Итальянский', checked: false},
    {id: '6', img: poland, value: 'Польский', checked: false},
  ]

  return (
    <Select label={'Язык'} selectData={selectData} icons={true} multiSelect={true}/>
  );
}

export default App;
