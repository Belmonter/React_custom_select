export interface ISelectData {
  id: string,
  img: string,
  value: string,
  checked: boolean,
}

export interface ISelectProps {
  label: string,
  selectData: ISelectData[],
  icons: boolean,
  multiSelect: boolean
}

export interface ISelectContext {
  data: ISelectData[] | [],
  onChangeData: Function,
  onSearchChange: Function,
  searchValue: string,
  icons: boolean,
  multiSelect: boolean,
  onCrossClick: Function,
}
