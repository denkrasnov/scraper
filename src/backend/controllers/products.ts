import { Request, Response, NextFunction } from "express";

import { ShapedProducts, ProductName } from "../scrapers/types";
import { Products } from "../models/products";

export const ProductsController = {
  getTVs: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const productsDocument = await Products.find({}, { fridge: 0 });
      const products =
        ((productsDocument[0] as unknown) as ShapedProducts)?.tv || [];

      res.status(200).json({ name: ProductName.TV, items: products });
    } catch (error) {
      next(error);
    }
  },

  getFridges: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const productsDocument = await Products.find({}, { tv: 0 });
      const products =
        ((productsDocument[0] as unknown) as ShapedProducts)?.fridge || [];

      res.status(200).json({ name: ProductName.FRIDGE, items: products });
    } catch (error) {
      next(error);
    }
  }
};
