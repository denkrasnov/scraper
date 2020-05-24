export enum ProductName {
  TV = "tv",
  FRIDGE = "fridge"
}

export enum ShopName {
  BOMBA = "bomba",
  DARWIN = "darwin",
  MAXIMUM = "maximum"
}

export interface Product {
  id: string;
  title?: string | null;
  imageUrl?: string | null;
  price?: string | null;
  noImage?: boolean;
  shop: string;
}

export type RawProducts = {
  name: string;
  items: Product[];
}[][];

export interface ShapedProducts {
  tv: Product[];
  fridge: Product[];
}
