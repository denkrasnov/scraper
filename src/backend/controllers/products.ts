import { Request, Response, NextFunction } from "express";

import { NewsCollection, ProductName } from "../scrapers/types";
import { NewsModel } from "../models/news";

// Keep this controler to teach Daniil about REST API
export const ProductsController = {
  getNews: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const productsDocument = await NewsModel.find({});
      const news =
        ((productsDocument[0] as unknown) as NewsCollection)?.news || [];

      res.status(200).json({ name: ProductName.MD, items: news });
    } catch (error) {
      next(error);
    }
  }
};
