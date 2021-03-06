// TODO: create shared types with /backend
import { ProductName, Article, Channel } from "../../../backend/scrapers/types";
import { Locale } from "../../../types";

export interface FilterProps {
  productName: ProductName;
  options: Channel[];
  items: Article[];
  locale?: Locale;
  onClickLocale?: () => void;
}
