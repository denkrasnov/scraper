// TODO: created shared types with /backend
import { ProductName } from "../../../backend/scrapers/types";

export interface FilterProps {
  productName: ProductName;
  options: string[];
}
