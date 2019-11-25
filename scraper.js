/* eslint-disable no-return-assign, no-param-reassign */
const puppeteer = require("puppeteer");
const nanoid = require("nanoid");

/* Maximum.md */
module.exports = async query => {
  const browser = await puppeteer.launch({
    // headless: false
    // args: ["--no-sandbox"]
  });

  const extractProducts = async url => {
    const extraPage = await browser.newPage();
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
      throw new Error("Can not goto page", error);
    }

    // await extraPage.$$eval("div.product__item__image img", imgs =>
    //   Promise.all(
    //     imgs.map(img => new Promise(resolve => (img.onload = resolve)))
    //   )
    // );

    // Scrape the data
    const rawExtraProducts = await extraPage.evaluate(() => {
      return Array.from(document.querySelectorAll("div.product__item")).map(
        product => {
          return {
            title: product
              .querySelector("div.product__item__title")
              .textContent.trim(),
            price: product
              .querySelector("div.clearfix")
              .querySelector("div.product__item__price-current")
              .textContent.trim(),
            imageUrl: product.querySelector("div.product__item__image img").src
          };
        }
      );
    });

    const extraProducts = rawExtraProducts.map(product => ({
      ...product,
      id: nanoid(10)
    }));

    await extraPage.close();

    if (extraProducts.length < 1 || extraProducts.length >= 20) {
      // Terminate
      return extraProducts;
    }

    // Go fetch the next page search/x+1
    let pageNumber = url.match(/search\/(\d+)/);
    if (Array.isArray(pageNumber) && pageNumber.length > 1) {
      pageNumber = parseInt(pageNumber[1], 10);
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
