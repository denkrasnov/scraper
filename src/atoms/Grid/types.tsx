import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  gridGap?: string;
  gridTemplateColumns?: string;
}
