import chalk from "chalk";

import { Products } from "../models/products";
// import scrapeBomba from "./scrapeBomba";
// import scrapeDarwin from "./scrapeDarwin";
import scrapeMaximum from "./scrapeMaximum";
import shapeProducts from "./helpers/shapeProducts";
import { RawProducts } from "./types";

const scrape = () => {
  Promise.all([
    scrapeMaximum()
    // scrapeDarwin(),
    // scrapeBomba()
  ]).then(async (products: RawProducts) => {
    const shapedProducts = shapeProducts(products);

    // clean collection
    Products.collection.drop();

    const newProducts = new Products(shapedProducts);

    newProducts.save((error) => {
      if (error)
        console.log(
          chalk.bold.red("ERROR: Collection is not saved ❌:", error)
        );
    });
  });
};

export default scrape;
