import puppeteer, { Page } from "puppeteer";
import { nanoid } from "nanoid";
import chalk from "chalk";

import { ShopName, Product } from "../types";
import getNextUrl from "./helpers/getNextUrl";
import { urls } from "./constants";

const error = chalk.bold.red;
const finished = chalk.bold.green;

export const scrapDarwin = async () => {
  try {
    const browser = await puppeteer.launch({
      args: ["--incognito"]
      // headless: false
    });

    const extractProducts = async (url: string): Promise<Product[]> => {
      const page: Page = await browser.newPage();
      await page.setRequestInterception(true);

      page.on("request", (req) => {
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
          return Array.from(products).map((product) => {
            const titleElement = product.querySelector("figcaption a");
            const priceNewElement = product.querySelector(
              "div.bottom-wrap span.price-new > b"
            );
            const imageElement: HTMLImageElement | null = product.querySelector(
              "div.img-wrap img"
            );
            const imageLinkElement: HTMLLinkElement | null = product.querySelector(
              "div.img-wrap a"
            );

            const titleText = titleElement && titleElement.textContent;
            const priceNewText = priceNewElement && priceNewElement.textContent;
            const productUrl = imageLinkElement && imageLinkElement.href;

            return {
              title: titleText?.trim(),
              price: priceNewText?.trim(),
              imageUrl: imageElement?.src,
              noImage: true,
              productUrl
            };
          });
        }
        return [];
      });

      const extraProducts: Product[] = rawExtraProducts.map((product) => ({
        ...product,
        id: nanoid(10),
        shop: ShopName.DARWIN
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

    console.log(finished("Darwin finished ✅"));

    return allProducts;
  } catch (err) {
    console.log(error("Darwin ERROR:", err));
    return [];
  }
};

export default scrapDarwin;
