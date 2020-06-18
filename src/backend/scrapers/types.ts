export enum ProductName {
  TV = "tv",
  FRIDGE = "fridge"
}

export enum ShopName {
  BOMBA = "bomba.md",
  DARWIN = "darwin.md",
  MAXIMUM = "maximum.md"
}

export interface Product {
  id: string;
  title?: string | null;
  imageUrl?: string | null;
  price?: string | null;
  noImage?: boolean;
  shop: string;
  productUrl: string | null;
}

export type RawProducts = {
  name: string;
  items: Product[];
}[][];

export interface ShapedProducts {
  tv: Product[];
  fridge: Product[];
}

export type ObjectType = { [key: string]: any };
