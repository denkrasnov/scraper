import { Product } from "src/app/services/fetchProducts/types";

export interface ProductCardProps
  extends Pick<Product, "imageUrl" | "title" | "price"> {}
