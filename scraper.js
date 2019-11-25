/* eslint-disable no-return-assign, no-param-reassign */
const puppeteer = require("puppeteer");

/* Maximum.md */
module.exports = async () => {
  const browser = await puppeteer.launch({
    // headless: true,
    // args: ["--no-sandbox"]
  });

  const extractProducts = async url => {
    const extraPage = await browser.newPage();

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
    const extraProducts = await extraPage.evaluate(() => {
      return Array.from(document.querySelectorAll("div.product__item")).map(
        product => {
          return {
            title: product
              .querySelector("div.product__item__title")
              .textContent.trim(),
            imageUrl: product.querySelector("div.product__item__image img").src
          };
        }
      );
    });

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
    }?query=tv`;

    return extraProducts.concat(await extractProducts(nextUrl));
  };

  const firstUrl = "https://maximum.md/ru/search/?query=tv";
  const allProducts = await extractProducts(firstUrl);

  await browser.close();
  return allProducts;
};
