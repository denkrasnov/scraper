import { ChangeEvent } from "react";

export interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  name: string;
}
