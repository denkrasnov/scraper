import { ReactNode } from "react";

type FlexGrow = "gr1";
export interface GridProps {
  children: ReactNode;
  gridProducts?: boolean;
  result?: boolean;
  main?: boolean;
  flexGrow?: FlexGrow;
}
