import puppeteer, { Page } from "puppeteer";
import nanoid from "nanoid";

export interface Product {
  id: string;
  title: string | null;
  imageUrl: string | null;
  price: string | null;
}

/* Maximum.md */
export const scrapMaximum = async (query: string) => {
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

    // await extraPage.$$eval("div.product__item__image img", imgs =>
    //   Promise.all(
    //     imgs.map(img => new Promise(resolve => (img.onload = resolve)))
    //   )
    // );

    // Scrape the data
    const rawExtraProducts = await extraPage.evaluate(() => {
      const productItems = document.querySelectorAll("div.product__item");

      if (productItems) {
        return Array.from(productItems).map(product => {
          const productItemTitle = product.querySelector(
            "div.product__item__title"
          );
          const productItemTitleText =
            productItemTitle && productItemTitle.textContent;

          const clearfix = product.querySelector("div.clearfix");
          const productPriceCurrent =
            clearfix &&
            clearfix.querySelector("div.product__item__price-current");
          const productPriceCurrentText =
            productPriceCurrent && productPriceCurrent.textContent;

          const productItemImage: HTMLImageElement | null = product.querySelector(
            "div.product__item__image img"
          );

          return {
            title: productItemTitleText && productItemTitleText.trim(),
            price: productPriceCurrentText && productPriceCurrentText.trim(),
            imageUrl: productItemImage && productItemImage.src
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

    if (extraProducts.length < 1 || extraProducts.length >= 20) {
      // Terminate
      return extraProducts;
    }

    // Go fetch the next page search/x+1
    const matchArray = url.match(/search\/(\d+)/);
    const number = matchArray && matchArray[1];
    const pageNumber = number && parseInt(number, 10);

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
