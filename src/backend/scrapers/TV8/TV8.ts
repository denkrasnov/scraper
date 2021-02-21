/* eslint-disable no-await-in-loop  */
import puppeteer, { Page } from "puppeteer";

import { error, success } from "../helpers/status";
import { TV8 } from "./constants";
import { Article, Channel } from "../types";

const extractNews = (channel: Channel) => {
  const extractedElements = document.querySelectorAll(
    "ul.widget-latest-posts-tv8 > li"
  );
  const news: Article[] = [];

  Array.from(extractedElements).forEach((item) => {
    const headerLink: HTMLLinkElement | null = item.querySelector(
      "header h3 > a"
    );
    const header = headerLink?.textContent || undefined;
    const newsURL = headerLink?.href;
    const imageURL = item.querySelector("figure")?.dataset?.original;
    const date =
      item.querySelector("div.widget-meta ul > li.meta-date > span")
        ?.textContent || undefined;

    news.push({ header, imageURL, newsURL, date, channel });
  });

  return news;
};

const scrapeInfiniteScrollItems = async (
  page: Page,
  extractItems: (channel: Channel) => Article[],
  itemTargetCount: number,
  scrollDelay = 1000
) => {
  let news: Article[] = [];
  try {
    let previousHeight: number | null;
    while (news.length < itemTargetCount) {
      news = await page.evaluate(extractItems, Channel.TV8);

      previousHeight =
        (await page.evaluate(() => {
          const element = document.querySelector("ul.widget-latest-posts-tv8");
          const elementHeight = element?.scrollHeight;
          if (element) {
            element.scrollTo(0, element.scrollHeight);
          }
          return elementHeight;
        })) || null;

      await page.waitForFunction(
        (oldHeight: number | null) => {
          const ulElement = document.querySelector(
            "ul.widget-latest-posts-tv8"
          );
          return ulElement && oldHeight
            ? ulElement.scrollHeight > oldHeight
            : false;
        },
        {},
        previousHeight
      );

      await page.waitFor(scrollDelay);
    }
  } catch (e) {
    console.log(error("❌ ScrollItems --ERROR--:", e));
  }
  return news;
};

const getTV8News = async () => {
  console.log(success("✅ TV8 --START--"));
  try {
    // Set up browser and page.
    const browser = await puppeteer.launch({
      // headless: false,
      args: ["--incognito", "--no-sandbox"]
    });
    const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 926 });
    await page.setDefaultNavigationTimeout(60000);
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (req.resourceType() === "font" || req.resourceType() === "image") {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(TV8);

    // Scroll and extract items from the page.
    const news = await scrapeInfiniteScrollItems(page, extractNews, 60);

    await browser.close();

    console.log(success("✅ TV8 --FINISH--"));

    return news;
  } catch (e) {
    console.log(error("❌ TV8 --ERROR--:", e));
    return undefined;
  }
};

export default getTV8News;
