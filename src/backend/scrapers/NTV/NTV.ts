import puppeteer from "puppeteer";

import { error, success } from "../helpers/status";
import { NTVmd, NTVru } from "./constants";
import { Article, Channel } from "../types";

const extractNews = (channel: Channel) => {
  const articlesElements = document.querySelectorAll(
    "ul#catcontainer div#dle-content > li"
  );
  const news: Article[] = [];

  Array.from(articlesElements).forEach((article) => {
    if (article.className !== "hdata") {
      const headerElement: HTMLLinkElement | null = article.querySelector(
        "a > span"
      );
      const header = headerElement?.childNodes[1]?.textContent?.trim();
      const date =
        headerElement?.querySelector("span.time_news")?.textContent ||
        undefined;

      const newsURL = article.querySelector("a")?.href;
      const imageURL = article.querySelector<HTMLImageElement>(
        "div.newsblk_left img"
      )?.src;

      news.push({ header, imageURL, newsURL, date, channel });
    }
  });

  return news;
};

const getNTVNews = async () => {
  console.log(success("✅ NTV --START--"));
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

    await page.goto(NTVmd);
    // Scroll and extract items from the page.
    const md = await page.evaluate(extractNews, Channel.NTV);
    await page.close();

    const page2 = await browser.newPage();
    await page2.goto(NTVru);
    // Scroll and extract items from the page.
    const ru = await page2.evaluate(extractNews, Channel.NTV);

    // Close the browser.
    await browser.close();

    console.log(success("✅ NTV --FINISH--"));

    return { md, ru };
  } catch (e) {
    console.log(error("❌ NTV --ERROR--:", e));
    return undefined;
  }
};

export default getNTVNews;
