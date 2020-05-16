import { ReactNode } from "react";

type ButtonType = "submit" | "button" | "reset";

export interface ButtonProps {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  transparent?: boolean;
  color?: string;
}
