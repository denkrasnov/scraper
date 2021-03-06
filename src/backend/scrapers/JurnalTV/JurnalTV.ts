import puppeteer, { Page } from "puppeteer";

import { getNextUrl } from "./getNextUrl";
import { error, success } from "../helpers/status";
import { JurnalTV } from "./constants";
import { Article, Channel } from "../types";

const extractNews = async (page: Page, url: string): Promise<Article[]> => {
  await page.goto(url);

  // Scrape the data
  const news = await page.evaluate((channel: Channel): Article[] => {
    const articlesElements = document.querySelectorAll(
      "div.tab-content > div.tab-pane.active div.row > div.col.px-2"
    );

    if (articlesElements.length > 0) {
      return Array.from(articlesElements).map((article) => {
        const dateElements = article.querySelectorAll(
          "div.product > div.product-meta span"
        );
        const time = dateElements[1]?.textContent?.trim();
        const day = dateElements[0]?.textContent?.trim();
        const date = `${time} ${day}`;
        const headerElement = article.querySelector<HTMLLinkElement>(
          "div.product > h6 > a"
        );
        const header = headerElement?.textContent?.trim() || undefined;
        const newsURL = headerElement?.href || undefined;
        const imageURL = article.querySelector<HTMLImageElement>(
          "div.product > div.product-image > a > img"
        )?.src;

        return {
          header,
          imageURL,
          newsURL,
          date,
          channel
        };
      });
    }
    return [];
  }, Channel.JurnalTV);

  // Go fetch the next page search/x+1
  const matchArray = url
    ? url.match(/politic\/(\d+)/)
    : page.url().match(/politic\/(\d+)/);
  const number = matchArray && matchArray[1];
  const pageNumber = number && parseInt(number, 10);

  if (news.length < 1 || pageNumber === 3) {
    // Terminate
    return news;
  }

  const nextUrl = getNextUrl(pageNumber, url);

  return news.concat(await extractNews(page, nextUrl));
};

const getJurnalTVNews = async () => {
  console.log(success("✅ JurnalTV --START--"));

  try {
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

    const md = await extractNews(page, JurnalTV);

    // Close the browser.
    await browser.close();

    console.log(success("✅ JurnalTV --FINISH--"));

    return { md };
  } catch (e) {
    console.log(error("❌ JurnalTV --ERROR--:", e));
    return undefined;
  }
};

export default getJurnalTVNews;
