// TODO: create shared types with /backend
import { ProductName, Article } from "../../../backend/scrapers/types";

export interface FilterProps {
  productName: ProductName;
  options: string[];
  items: Article[];
}
