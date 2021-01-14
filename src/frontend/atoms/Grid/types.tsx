import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  gridProducts?: boolean;
  result?: boolean;
  main?: boolean;
}
