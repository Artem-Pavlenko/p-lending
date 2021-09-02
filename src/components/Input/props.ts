export default interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
}
