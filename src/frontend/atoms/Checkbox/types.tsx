import { ReactElement } from "react";

type StyledColor = "TV8" | "NTV" | "JurnalTV";

export interface CheckboxProps {
  name: string;
  value: string;
  label?: string | ReactElement<any>;
  styled?: StyledColor;
  onChange: (event: any) => void;
}
