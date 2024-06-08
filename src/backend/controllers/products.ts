import { Request, Response, NextFunction } from "express";

// import { NewsCollection, ProductName } from "../scrapers/types";
// import { NewsModel } from "../models/news";
import fs from "fs/promises";

// Keep this controler to teach Daniil about REST API
export const ProductsController = {
  getNews: async (_req: Request, _res: Response, next: NextFunction) => {
    try {
      // const productsDocument = await NewsModel.find({});
      // const news =
      //   ((productsDocument[0] as unknown) as NewsCollection)?.news || [];

      const data = await fs.readFile("macedo.json", "utf8");
      const articles = JSON.parse(data);

      const removed: any = [];
      //@ts-ignore
      const result = articles.filter((item: any) => {
        if (!!item.text) {
          return true;
        } else {
          removed.push({ title: item.title, date: item.postDate });
        }
      });
      await fs.writeFile("macedo.json", JSON.stringify(result));
      // res.status(200).json({ items: articles });
    } catch (error) {
      next(error);
    }
  }
};
