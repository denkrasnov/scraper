import { ReactNode } from "react";

import { DataAttr } from "~app/common/types";

export interface TouchableProps {
  children: ReactNode;
  dataAttr?: DataAttr;
  href?: string;
  productHover?: boolean;
  width?: string;
}
