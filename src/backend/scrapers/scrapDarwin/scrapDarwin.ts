import puppeteer, { Page } from "puppeteer";
import nanoid from "nanoid";
import chalk from "chalk";

import { urls } from "./constants";
import getNextUrl from "./helpers/getNextUrl";
import { Product } from "../types";

const error = chalk.bold.red;

export const scrapDarwin = async () => {
  try {
    const browser = await puppeteer.launch({
      // headless: false
    });

    const extractProducts = async (url: string): Promise<Product[]> => {
      const page: Page = await browser.newPage();
      await page.setRequestInterception(true);

      page.on("request", req => {
        if (
          req.resourceType() === "stylesheet" ||
          req.resourceType() === "font" ||
          req.resourceType() === "image"
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(url);

      // Scrape the data
      const rawExtraProducts = await page.evaluate(() => {
        const products = document.querySelectorAll(
          "section.products div.col-6 figure"
        );

        if (products.length > 0) {
          return Array.from(products).map(product => {
            const titleElement = product.querySelector("figcaption a");
            const titleText = titleElement && titleElement.textContent;

            const priceNewElement = product.querySelector(
              "div.bottom-wrap span.price-new > b"
            );
            const priceNewText = priceNewElement && priceNewElement.textContent;

            const imageElement: HTMLImageElement | null = product.querySelector(
              "div.img-wrap img"
            );

            return {
              title: titleText?.trim(),
              price: priceNewText?.trim(),
              imageUrl: imageElement?.src,
              noImage: true
            };
          });
        }
        return [];
      });

      const extraProducts: Product[] = rawExtraProducts.map(product => ({
        ...product,
        id: nanoid(10)
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

    const promises = urls.map(async url => {
      const products = await extractProducts(url);
      return products;
    });

    const allProducts = await Promise.all(promises);

    await browser.close();
    return allProducts.flat();
  } catch (err) {
    console.log(error(err)); // eslint-disable-line no-console
    return [];
  }
};

export default scrapDarwin;
