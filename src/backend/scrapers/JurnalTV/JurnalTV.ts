import puppeteer, { Page } from "puppeteer";

import { getNextUrl } from "./getNextUrl";
import { error, success } from "../helpers/status";
import { JurnalTV } from "./constants";
import { Article, Channels } from "../types";

const extractNews = async (page: Page, url: string): Promise<Article[]> => {
  await page.goto(url);

  // Scrape the data
  const news = await page.evaluate((channel: Channels): Article[] => {
    const articlesElements = document.querySelectorAll(
      "div.last-articles-list > div.row"
    );

    if (articlesElements.length > 0) {
      return Array.from(articlesElements).map((article) => {
        const date =
          article.querySelector("div.col-md-1 > div.article-time")
            ?.textContent || undefined;
        const headerElement = article.querySelector<HTMLLinkElement>(
          "div.col-md-8 > div.article-title > h3 > a"
        );
        const header = headerElement?.textContent || undefined;
        const newsURL = headerElement?.href || undefined;
        const imageURL = article.querySelector<HTMLImageElement>(
          "div.col-md-3 > div.article-image img"
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
  }, Channels.JurnalTV);

  // Go fetch the next page search/x+1
  const matchArray = url
    ? url.match(/ultima-ora\/(\d+)/)
    : page.url().match(/ultima-ora\/(\d+)/);
  const number = matchArray && matchArray[1];
  const pageNumber = number && parseInt(number, 10);

  if (news.length < 1 || pageNumber === 6) {
    // Terminate
    return news;
  }

  const nextUrl = getNextUrl(pageNumber, url);

  return news.concat(await extractNews(page, nextUrl));
};

const getJurnalTVNews = async () => {
  console.log(success("✅ JurnalTV --START--"));
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

    // Scroll and extract items from the page.
    const news = await extractNews(page, JurnalTV);

    // Close the browser.
    await browser.close();

    console.log(success("✅ JurnalTV --FINISH--"));

    return news;
  } catch (e) {
    console.log(error("❌ JurnalTV --ERROR--:", e));
    return undefined;
  }
};

export default getJurnalTVNews;
