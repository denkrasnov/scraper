import axios from "axios";
import { JSDOM } from "jsdom";

import { error, success } from "../helpers/status";

interface DataResponse {
  items: { [key: string]: any }[];
}

interface TemplateResponse {
  html: string;
}

interface Article {
  id: number;
  postDate: string;
  title: string;
  text: string;
  imageURL: string;
}

const extractArticles = (data: DataResponse, template: TemplateResponse) => {
  const result: Article[] = [];

  if (!data?.items.length || !template?.html) {
    return result;
  }

  const dom = new JSDOM(`<!DOCTYPE html><div>${template.html}</div>`);

  const articles = dom.window.document.querySelectorAll("article");

  Array.from(articles).forEach((item) => {
    const postId = item.getAttribute("id");

    const articleData = data.items.find((item) => {
      return item.ID === Number(postId?.replace("post--", ""));
    });

    // eslint-disable-next-line camelcase
    const postContent = articleData?.post_content;

    if (
      articleData &&
      `post--${articleData.ID}` === postId &&
      !postContent.includes("iframe")
    ) {
      const titleAnchor: HTMLLinkElement | null = item.querySelector(
        "div.post__content div.post__title h3 > a"
      );
      const title = titleAnchor?.textContent || "";

      const imageURL =
        item.querySelector<HTMLImageElement>("a.post__thumbnail > img")?.src ||
        "";

      result.push({
        id: articleData.ID,
        postDate: articleData.post_date,
        title,
        text: postContent,
        imageURL
      });
    }
  });

  return result;
};

const getEMacedo = async () => {
  console.log(success("✅ TV8 --START--"));

  const delay = (delayInms: number) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  try {
    let result: any = [];

    let times = 4;
    /* eslint-disable no-await-in-loop */
    for (let i = 1; i <= times; i += 1) {
      const reqData = await axios.get(
        `https://www.universal.org/ru/wp-json/posts/v2/seemore?nonce=0991818771&term=4&cat=0&page=${i}&template=false`
      );

      await delay(5000);

      const reqTemplate = await axios.get(
        `https://www.universal.org/ru/wp-json/posts/v2/seemore?nonce=0991818771&term=4&cat=0&page=${i}&template=true`
      );

      await delay(5000);

      console.log(success("Page number:", i));

      if (i === 1) {
        // eslint-disable-next-line camelcase
        const pages = reqData?.data?.information.max_num_pages;
        if (pages) {
          times = pages;
        }
      }

      const articles = extractArticles(reqData.data, reqTemplate.data);

      result = [...result, ...articles];
    }

    console.log(success("✅ TV8 --FINISH--"));

    return result;
  } catch (e) {
    // await browser?.close();
    console.log(error("❌ TV8 --ERROR--:", e));
    return undefined;
  }
};

export default getEMacedo;
