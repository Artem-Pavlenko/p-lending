export default interface IButtonProps {
  text: string;
  whiteStyle?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset";
  disabled?: boolean;
}
