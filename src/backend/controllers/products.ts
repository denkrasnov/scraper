import { Request, Response, NextFunction } from "express";

export const ProductsController = {
  getTVs: async (_req: Request, _res: Response, next: NextFunction) => {
    try {
      // TODO: get all tvs from db
      console.log("PruductsController.getTVs() called"); // eslint-disable-line no-console
    } catch (error) {
      next(error);
    }
  },

  getFridges: async (_req: Request, _res: Response, next: NextFunction) => {
    try {
      // TODO: get all fridges from db
      console.log("PruductsController.getFridges() called"); // eslint-disable-line no-console
    } catch (error) {
      next(error);
    }
  }
};
