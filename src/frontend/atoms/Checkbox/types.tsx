import { ReactElement } from "react";

export interface CheckboxProps {
  name: string;
  value: string;
  label?: string | ReactElement<any>;
  onChange: (event: any) => void;
}
