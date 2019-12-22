import puppeteer, { Page } from "puppeteer";
import nanoid from "nanoid";

import { Product } from "../types";

// https://darwin.md/ru
export const scrapDarwin = async (query: string) => {
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
    } catch (error) {
      throw new Error(`Can not goto page${error}`);
    }
    const rawExtraProducts = await page.evaluate(() => {
      const products = document.querySelectorAll("div.mt-3 > div.col-6 figure");

      if (products.length > 0) {
        return Array.from(products).map(product => {
          const titleElement = product.querySelector("figcaption a");
          const titleText = titleElement && titleElement.textContent;

          const priceNewElemnt = product.querySelector(
            "div.bottom-wrap span.price-new > b"
          );
          const priceNewText = priceNewElemnt && priceNewElemnt.textContent;

          const imageElement: HTMLImageElement | null = product.querySelector(
            "div.img-wrap img"
          );

          return {
            title: titleText && titleText.trim(),
            price: priceNewText && priceNewText.trim(),
            imageUrl: imageElement && imageElement.src,
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

    if (extraProducts.length < 1 || pageNumber === 3) {
      // Terminate
      return extraProducts;
    }

    const nextUrl = `https://darwin.md/ru/search?search=${query}&page=${
      pageNumber ? pageNumber + 1 : 2
    }`;

    return extraProducts.concat(await extractProducts(nextUrl));
  };

  const firstUrl = `https://darwin.md/ru/search?search=${query}`;
  const allProducts = await extractProducts(firstUrl);

  await browser.close();
  return allProducts;
};

export default scrapDarwin;
