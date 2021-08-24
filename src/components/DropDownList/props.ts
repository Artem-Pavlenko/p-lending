export default interface IDropDownListProps {
  title: string;
  list: string[];
  checked: string;
  setChecked: (item: string) => void;
}
