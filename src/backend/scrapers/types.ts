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
  specifications?: SpecificationsTV;
}

export interface RawProduct extends Omit<Product, "id" | "shop"> {}

export type RawProducts = {
  name: string;
  items: Product[];
}[][];

export interface ShapedProducts {
  tv: Product[];
  fridge: Product[];
}

export interface SpecificationsTV {
  screenSize: string | undefined;
}

export type ObjectType = { [key: string]: any };
