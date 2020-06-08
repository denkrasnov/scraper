import puppeteer, { Page } from "puppeteer";
import { nanoid } from "nanoid";
import chalk from "chalk";

import getNextUrl from "./helpers/getNextUrl";
import { urls } from "./constants";
import { Product, ShopName } from "../types";

const error = chalk.bold.red;
const finished = chalk.bold.green;

const scrapeMaximum = async () => {
  try {
    const browser = await puppeteer.launch({
      args: ["--incognito"]
      // headless: false
    });

    const extractProducts = async (url: string): Promise<Product[]> => {
      const extraPage: Page = await browser.newPage();

      await extraPage.setRequestInterception(true);

      extraPage.on("request", (req) => {
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

      await extraPage.goto(url);

      // Scrape the data
      const rawExtraProducts = await extraPage.evaluate(() => {
        const products = document.querySelectorAll("div.product__item");

        if (products.length > 0) {
          return Array.from(products).map((product) => {
            const titleElement = product.querySelector(
              "div.product__item__title"
            );
            const titleLinkElement: HTMLLinkElement | null = product.querySelector(
              "div.product__item__title a"
            );
            const priceNewElement = product.querySelector(
              "div.clearfix div.product__item__price-current"
            );
            const imageElement: HTMLImageElement | null = product.querySelector(
              "div.product__item__image img"
            );

            const productUrl = titleLinkElement && titleLinkElement.href;
            const titleText = titleElement && titleElement.textContent;
            const priceNewText = priceNewElement && priceNewElement.textContent;
            return {
              title: titleText?.trim(),
              price: priceNewText?.trim(),
              imageUrl: imageElement?.src,
              productUrl
            };
          });
        }
        return [];
      });

      const extraProducts: Product[] = rawExtraProducts.map((product) => ({
        ...product,
        id: nanoid(10),
        shop: ShopName.MAXIMUM
      }));

      await extraPage.close();

      // Go fetch the next page search/x+1
      const matchArray = url
        ? url.match(/search\/(\d+)/)
        : extraPage.url().match(/search\/(\d+)/);
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

    console.log(finished("Maximum finished ✅"));

    return allProducts;
  } catch (err) {
    console.log(error("Maximum ERROR:", err));
    return [];
  }
};

export default scrapeMaximum;
