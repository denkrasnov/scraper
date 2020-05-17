import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import mongoose from "mongoose";

import { Products } from "./src/backend/models/products";
import productsRoute from "./src/backend/routes/products";
import scrapBomba from "./src/backend/scrapers/scrapBomba";
import scrapDarwin from "./src/backend/scrapers/scrapDarwin";
import scrapMaximum from "./src/backend/scrapers/scrapMaximum";
import { Product } from "./src/backend/scrapers/types";

const config = require("./webpack.config");
require("dotenv").config();

const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- Compare md ---")}
 The server is available on ${chalk.hex("#f7c132")("http://localhost:9001/")}
\n`);

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      builtAt: false,
      children: false,
      colors: true,
      modules: false
    }
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbConnectionUrl = process.env.CONNECTION_URL;

// Initialize DB connection
mongoose
  .connect(dbConnectionUrl!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((error) => console.log(chalk.bold.red(error))); // eslint-disable-line no-console

mongoose.connection.on("error", (error) => {
  console.log(chalk.bold.red(error)); // eslint-disable-line no-console
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// TODO get products in separate requests for different product types
app.use("/products", productsRoute);

/**
 * GET products
 */
app.get("/search", (_req: Request, res: Response) => {
  return Promise.all([scrapMaximum(), scrapBomba(), scrapDarwin()]).then(
    async (products) => {
      // Add products to db
      const newProducts = new Products({
        products: ([] as Product[]).concat(...products)
      });

      await newProducts.save();

      return res
        .status(200)
        .json({ products: ([] as Product[]).concat(...products) });
    }
  );
});

app.listen(process.env.PORT, () => {});
