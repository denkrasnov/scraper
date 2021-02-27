// TODO: create shared types with /backend
import { ProductName, Article, Channel } from "../../../backend/scrapers/types";

export interface FilterProps {
  productName: ProductName;
  options: Channel[];
  items: Article[];
}
