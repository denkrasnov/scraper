import { Product } from "src/services/fetchProducts/types";

export interface ProductCardProps
  extends Pick<Product, "imageUrl" | "title" | "price" | "noImage"> {}
