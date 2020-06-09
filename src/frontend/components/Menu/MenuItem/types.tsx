import { DataAttr } from "~app/common/types";

export interface MenuItemProps {
  src: string;
  text: string;
  onClick: () => void;
  dataAttr?: DataAttr;
}
