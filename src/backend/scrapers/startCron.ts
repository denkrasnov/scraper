import cron from "node-cron";
import chalk from "chalk";

import { Products } from "../models/products";
import scrapeBomba from "./scrapeBomba";
import scrapeDarwin from "./scrapeDarwin";
import scrapeMaximum from "./scrapeMaximum";
import shapeProducts from "./helpers/shapeProducts";
import { RawProducts } from "./types";

// start the job every day at 2:00 pms
const startCron = () =>
  cron.schedule("0 2 * * *", () => {
    Promise.all([scrapeMaximum(), scrapeDarwin(), scrapeBomba()]).then(
      async (products: RawProducts) => {
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
      }
    );

    console.log(chalk.bold.green("Cron job finished 🕑"));
  });

export default startCron;
