import { Page } from "puppeteer";
import chalk from "chalk";

import { SpecificationsTV } from "../../types";
import { defaultReturn } from "./constants";

const error = chalk.bold.red;

export const scrapeSpecifications = async (
  // page: Page,
  browser: any,
  url: string | null
): Promise<SpecificationsTV | undefined> => {
  console.log("url--------:", url);
  try {
    if (!url) {
      console.log(error(`Maximum product ${url} does not exist: `));
      return defaultReturn;
    }

    const page: Page = await browser.newPage();

    // await page.setRequestInterception(true);

    // page.on("request", (req) => {
    //   if (
    //     req.resourceType() === "stylesheet" ||
    //     req.resourceType() === "font" ||
    //     req.resourceType() === "image"
    //   ) {
    //     req.abort();
    //   } else {
    //     req.continue();
    //   }
    // });

    await page.goto(url);

    // Scrape the data
    const specifications = await page.evaluate(() => {
      const colSm6 = document.querySelectorAll(
        "div.product-view-features div.row div.col-sm-6"
      );

      const featureBlockList = colSm6[0].querySelectorAll("ul.feature-list");

      let screenSize: string | undefined | null;
      Array.from(featureBlockList).forEach((featureBlock) => {
        if (
          featureBlock.className === "feature-title" &&
          featureBlock.textContent === "Imagine"
        ) {
          const featureList = featureBlock.nextElementSibling?.querySelectorAll(
            "li"
          );

          if (featureList) {
            Array.from(featureList).forEach((feature) => {
              const isInch = feature.firstElementChild?.textContent?.includes(
                "inch"
              );

              if (isInch) {
                screenSize = feature
                  ?.querySelector("span.feature-list-item_right")
                  ?.textContent?.trim();
              }
            });
          }
        }
      });

      return screenSize ? { screenSize } : defaultReturn;
    });

    await page.close();

    return specifications;
  } catch (err) {
    console.log(error(`Maximum specification ${url} ERROR: `, err));
    return defaultReturn;
  }
};
