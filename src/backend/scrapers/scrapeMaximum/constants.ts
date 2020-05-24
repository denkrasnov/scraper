import { ProductName } from "../types";

const tv = "https://maximum.md/ru/search/?query=televizor";

const fridge = "https://maximum.md/ru/search/?query=Холодильники";

export const urls = [
  { url: tv, name: ProductName.TV },
  { url: fridge, name: ProductName.FRIDGE }
];
