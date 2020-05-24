import puppeteer, { Page } from "puppeteer";
import { nanoid } from "nanoid";
import chalk from "chalk";

import { ShopName, Product } from "../types";
import getNextUrl from "./helpers/getNextUrl";
import { urls } from "./constants";

const error = chalk.bold.red;
const finished = chalk.bold.green;
const info = chalk.bold.yellow;

const scrapeBomba = async () => {
  try {
    const browser = await puppeteer.launch({
      // headless: false
    });

    const extractProducts = async (url: string): Promise<Product[]> => {
      const page: Page = await browser.newPage();
      await page.setViewport({ width: 1199, height: 900 });
      await page.setRequestInterception(true);

      page.on("request", (req) => {
        if (req.resourceType() === "font" || req.resourceType() === "image") {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(url);

      await page.waitForSelector("div.main div.catalog div.catalog-item2");

      try {
        await page.waitForSelector("div.catalog-item-product", {
          timeout: 5000
        });
      } catch (err) {
        // Terminate
        console.log(`${info(err)}: Page ${url}`);
        return [];
      }

      const rawExtraProducts = await page.evaluate(() => {
        const products = document.querySelectorAll("div.catalog-item-product");

        if (products.length > 0) {
          return Array.from(products).map((product) => {
            const titleElement = product.querySelector("div.product-name a");
            const titleText = titleElement && titleElement.textContent;

            const priceNewElement = product.querySelector(
              "div.product-sector-three > div.product-price div.aac-price-main span"
            );
            const priceNewText = priceNewElement && priceNewElement.textContent;

            const imageElement: HTMLImageElement | null = product.querySelector(
              "div.product-img img"
            );

            return {
              title: titleText && titleText.trim(),
              price: priceNewText && priceNewText.trim(),
              imageUrl: imageElement && imageElement.src
            };
          });
        }
        return [];
      });

      const extraProducts: Product[] = rawExtraProducts.map((product) => ({
        ...product,
        id: nanoid(10),
        shop: ShopName.BOMBA
      }));

      await page.close();

      // Go fetch the next page search/x+1
      const matchArray = url
        ? url.match(/page=(\d+)/)
        : page.url().match(/page=(\d+)/);
      const number = matchArray && matchArray[1];
      const pageNumber = number && parseInt(number, 10);

      if (extraProducts.length < 1) {
        // Terminate
        return extraProducts;
      }

      const nextUrl = getNextUrl(pageNumber, url);

      return extraProducts.concat(await extractProducts(nextUrl));
    };

    const promises = urls.map(async (urlData) => {
      const products = {
        name: urlData.name,
        items: await extractProducts(urlData.url)
      };
      return products;
    });

    const allProducts = await Promise.all(promises);

    await browser.close();

    console.log(finished("Bomba finished ✅"));

    return allProducts;
  } catch (err) {
    console.log(error(err));
    return [];
  }
};

export default scrapeBomba;
