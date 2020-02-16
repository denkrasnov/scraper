import puppeteer, { Page } from "puppeteer";
import nanoid from "nanoid";

import { Product } from "../types";

// https://bomba.md/ru
export const scrapBomba = async () => {
  const browser = await puppeteer.launch({
    // headless: false
    // args: ["--no-sandbox"]
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

    try {
      await page.goto(url);
      await page.waitForSelector(
        "div.catalog > div.catalog-in > div.catalog-item2"
      );
    } catch (error) {
      throw new Error(`Can not goto page${error}`);
    }
    const rawExtraProducts = await page.evaluate(() => {
      const products = document.querySelectorAll(
        "div.catalog > div.catalog-in > div.catalog-item2 > div.catalog-product-box-in div.catalog-item-product"
      );

      if (products.length > 0) {
        return Array.from(products).map(product => {
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

    const nextUrl = `https://bomba.md/ru/category/televizory/?price[min]=1499&price[max]=119999&filters[2817][min]=19&filters[2817][max]=75&filters[2819][min]=48&filters[2819][max]=209&page=${
      pageNumber ? pageNumber + 1 : 2
    }`;

    return extraProducts.concat(await extractProducts(nextUrl));
  };

  const firstUrl = `https://bomba.md/ru/category/televizory/?price[min]=1499&price[max]=119999&filters[2817][min]=19&filters[2817][max]=75&filters[2819][min]=48&filters[2819][max]=209`;
  const allProducts = await extractProducts(firstUrl);

  await browser.close();
  return allProducts;
};

export default scrapBomba;
