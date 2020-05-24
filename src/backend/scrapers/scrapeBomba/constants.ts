import { ProductName } from "../types";

const tv =
  "https://bomba.md/ru/category/633647/?price%5Bmin%5D=1299&price%5Bmax%5D=69999&filters%5B2817%5D%5Bmin%5D=22&filters%5B2817%5D%5Bmax%5D=75";

const fridge =
  "https://bomba.md/ru/category/tehnica-de-bucatarie-electrocasnice-mari-frigidere/?price%5Bmin%5D=1699&price%5Bmax%5D=54999&filters%5B720%5D%5Bmin%5D=47&filters%5B720%5D%5Bmax%5D=203&filters%5B4055%5D%5Bmin%5D=45&filters%5B4055%5D%5Bmax%5D=112&filters%5B2219%5D%5Bmin%5D=0&filters%5B2219%5D%5Bmax%5D=647&filters%5B2256%5D%5Bmin%5D=39&filters%5B2256%5D%5Bmax%5D=459&filters%5B2250%5D%5Bmin%5D=0&filters%5B2250%5D%5Bmax%5D=236&filters%5B3736%5D%5Bmin%5D=0&filters%5B3736%5D%5Bmax%5D=45&filters%5B1496%5D%5Bmin%5D=1&filters%5B1496%5D%5Bmax%5D=2";

export const urls = [
  { url: tv, name: ProductName.TV },
  { url: fridge, name: ProductName.FRIDGE }
];
