/* eslint-disable camelcase */
import { NewsModel } from "../models/news";
import { error } from "./helpers/status";
import getTV8News from "./TV8";
import getNTVNews from "./NTV";
import getJurnalTVNews from "./JurnalTV";
import { Article } from "./types";

type Acc = {
  md_MD?: Article[];
  md_RU?: Article[];
};

const scrape = async () => {
  const products = await Promise.all([
    getTV8News(),
    getNTVNews(),
    getJurnalTVNews()
  ]);

  // TODO: extract in a helper
  const news = products
    .filter((item) => !!item)
    .reduce<Acc>((acc, item) => {
      if (item && "md" in item && item.md.length) {
        if (!acc.md_MD) {
          acc.md_MD = item.md;
        }
        acc.md_MD = [...acc.md_MD, ...item.md];
      }

      if (item && "ru" in item && item.ru.length) {
        if (!acc.md_RU) {
          acc.md_RU = item.ru;
        }
        acc.md_RU = [...acc.md_RU, ...item.ru];
      }

      return acc;
    }, {});

  try {
    await NewsModel.collection.drop();
  } catch (err) {
    console.log(error("❌ ERROR: No collection to drop", err));
  }

  const newsProducts = new NewsModel(news);

  newsProducts.save((err) => {
    if (err) console.log(error("❌ ERROR: Collection is not saved:", err));
  });

  return newsProducts;
};

export default scrape;
