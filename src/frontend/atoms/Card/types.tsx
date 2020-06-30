import { ReactNode } from "react";

import { DataAttr } from "~app/common/types";

export interface CardProps {
  children: ReactNode;
  dataAttr?: DataAttr;
  href?: string;
  fullHeight?: boolean;
}
