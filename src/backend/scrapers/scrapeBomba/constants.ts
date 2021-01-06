import { ProductName } from "../types";

const tv =
  "https://bomba.md/ro/category/633647/?price%5Bmin%5D=1299&price%5Bmax%5D=69999&filters%5B2817%5D%5Bmin%5D=22&filters%5B2817%5D%5Bmax%5D=75";

const fridge =
  "https://www.bomba.md/ro/category/tehnica-de-bucatarie-electrocasnice-mari-frigidere/?price%5Bmin%5D=1299&price%5Bmax%5D=69999&filters%5B2817%5D%5Bmin%5D=22&filters%5B2817%5D%5Bmax%5D=75";

export const urls = [
  { url: tv, name: ProductName.TV },
  { url: fridge, name: ProductName.FRIDGE }
];
