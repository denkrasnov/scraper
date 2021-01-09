import { Router } from "express";

import { ProductsController } from "../controllers/products";

const router = Router();

router.route("/").get(ProductsController.getNews);

export default router;
