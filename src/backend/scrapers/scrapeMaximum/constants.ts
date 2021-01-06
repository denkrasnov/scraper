import { ProductName } from "../types";

const tv = "https://maximum.md/ro/search/?query=televizor";

const fridge = "https://maximum.md/ro/search/?query=frigider";

export const urls = [
  { url: tv, name: ProductName.TV },
  { url: fridge, name: ProductName.FRIDGE }
];
