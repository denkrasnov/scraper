import puppeteer, { Page } from "puppeteer";
import nanoid from "nanoid";

import { Product } from "../types";

const scrapMaximum = async (query: string) => {
  const browser = await puppeteer.launch({
    // headless: false
    // args: ["--no-sandbox"]
  });

  const extractProducts = async (url: string): Promise<Product[]> => {
    const extraPage: Page = await browser.newPage();
    await extraPage.setRequestInterception(true);

    extraPage.on("request", req => {
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

    try {
      await extraPage.goto(url);
    } catch (error) {
      throw new Error(`Can not goto page${error}`);
    }

    // Scrape the data
    const rawExtraProducts = await extraPage.evaluate(() => {
      const products = document.querySelectorAll("div.product__item");

      if (products.length > 0) {
        return Array.from(products).map(product => {
          const titleElement = product.querySelector(
            "div.product__item__title"
          );
          const titleText = titleElement && titleElement.textContent;

          const priceNewElement = product.querySelector(
            "div.clearfix div.product__item__price-current"
          );

          const priceNewText = priceNewElement && priceNewElement.textContent;

          const imageElement: HTMLImageElement | null = product.querySelector(
            "div.product__item__image img"
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

    const extraProducts: Product[] = rawExtraProducts.map(product => ({
      ...product,
      id: nanoid(10)
    }));

    await extraPage.close();

    // Go fetch the next page search/x+1
    const matchArray = url
      ? url.match(/search\/(\d+)/)
      : extraPage.url().match(/search\/(\d+)/);
    const number = matchArray && matchArray[1];
    const pageNumber = number && parseInt(number, 10);

    if (extraProducts.length < 1 || pageNumber === 2) {
      // Terminate
      return extraProducts;
    }

    const nextUrl = `https://maximum.md/ru/search/${
      pageNumber ? pageNumber + 1 : 2
    }?query=${query}`;

    return extraProducts.concat(await extractProducts(nextUrl));
  };

  const firstUrl = `https://maximum.md/ru/search/?query=${query}`;
  const allProducts = await extractProducts(firstUrl);

  await browser.close();
  return allProducts;
};

export default scrapMaximum;
