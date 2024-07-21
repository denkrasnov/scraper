/* eslint-disable camelcase */
import axios from "axios";
import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { error, success } from "../helpers/status";
// @ts-ignore
// const StealthPlugin = _StealthPlugin.default;

interface DataResponse {
  id: number;
  postDate: string;
  postName: string;
  title: string;
}

// interface TemplateResponse {
//   html: string;
// }

interface Article {
  id: number;
  postDate: string;
  title: string;
  text: string;
  imageURL: string;
}

const extractArticle = async (
  rawData: DataResponse,
  page: Page,
  index: number
): Promise<Article | undefined> => {
  const { postName, ...restPost } = rawData;
  const baseURl = `https://www.universal.org/en/bispo-macedo/${postName}`;
  console.log(success("Start page:", baseURl));
  try {
    await page.goto(baseURl);
    console.log("START-evaluate------", index);
    console.log("article------", rawData.id, rawData.postDate);
    // Scrape the data
    const article = await page.evaluate((): Partial<Article> | undefined => {
      const containers = document.getElementsByClassName("content-left");

      // if (containers.length !== 1) {
      //   return undefined;
      // }

      const iframes = containers[0].getElementsByTagName("iframe");

      if (iframes.length > 0) {
        return undefined;
      }

      const container = containers[0];
      const textElements =
        container
          .querySelector<HTMLElement>("div.m-single-content")
          ?.getElementsByTagName("*") || [];

      let text = "";
      for (let i = 0; i < textElements.length; i += 1) {
        text += textElements[i].outerHTML;
      }

      const imageURL =
        container.querySelector<HTMLImageElement>("div.m-single-banner > img")
          ?.src || "";

      return {
        imageURL,
        text
      };
    });

    console.log("END-evaluate--2----", article);
    // @ts-ignore
    return article ? { ...article, ...restPost } : undefined;
  } catch (e) {
    console.log(error("❌ Evaluate --ERROR--:", e, index));
    throw e;
  }
};

const getEMacedoEN = async () => {
  console.log(success("✅ TV8 --START--"));

  const delay = (delayInms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, delayInms);
    });

  try {
    const rawData: any = [];

    const times = 227;
    /* eslint-disable no-await-in-loop */
    for (let i = 1; i <= times; i += 1) {
      const reqData = await axios.get(
        `https://www.universal.org/en/wp-json/posts/v2/seemore?nonce=0991818771&term=4&cat=0&page=${i}&template=false`
      );
      await delay(2000);
      console.log(success("Page number:", i));

      // const rawArticles = reqData?.data?.items.map(
      //   ({ ID, post_date, post_name, post_title }: any) => ({
      //     id: ID,
      //     postDate: post_date,
      //     postName: post_name,
      //     title: post_title
      //   })
      // );

      if (!reqData?.data?.items) {
        console.log(error("❌ NO_ITEMS-------:"));
        // eslint-disable-next-line no-continue
        continue;
      }

      for (let i = 0; i < reqData?.data?.items.length; i += 1) {
        const { ID, post_date, post_name, post_title } = reqData.data.items[i];
        console.log("raw---------", post_date, post_name);
        const art = {
          id: ID,
          postDate: post_date,
          postName: post_name,
          title: post_title
        };
        rawData.push(art);
      }

      // for (let i = 0; i < rawArticles.length; i += 1) {
      //   console.log(
      //     "raw---------",
      //     rawArticles[i].postDate,
      //     rawArticles[i].postName
      //   );
      //   rawData.push(rawArticles[i]);
      // }

      // rawData = [...rawData, ...rawArticles];
    }

    puppeteer.use(StealthPlugin());

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

    const articles = [];
    const rawDataLength = rawData.length;
    console.log("rawDataLength----------", rawDataLength);

    // eslint-disable-next-line consistent-return
    const retryForever = async (fn: any, index: number) => {
      try {
        const res = await fn();
        return res;
      } catch (e) {
        console.log(error("❌ RETRY--:", e));
        console.log(error("❌ INDEX--:", index));
        retryForever(fn, index);
      }
    };

    for (let i = 0; i < rawDataLength; i += 1) {
      const extractedArticle = await retryForever(
        () => extractArticle(rawData[i], page, i),
        i
      );
      console.log("extractedArticle-------", extractedArticle);
      if (extractedArticle) {
        articles.push(extractedArticle);
      }

      // await delay(3000);
    }

    await browser.close();

    console.log("result-------", articles);

    console.log(success("✅ TV8 --FINISH--"));

    return articles;
  } catch (e) {
    // await browser?.close();
    console.log(error("❌ MacedoEN --ERROR--:", e));
    return undefined;
  }
};

export default getEMacedoEN;
