import { Router } from "express";

import { ProductsController } from "../controllers/products";

const router = Router();

router.route("/tvs").get(ProductsController.getTVs);

router.route("/fridges").get(ProductsController.getFridges);

export default router;
