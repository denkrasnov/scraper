import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { query, sanitizeQuery, validationResult } from "express-validator";

import scrapBomba from "./backend/scrapers/scrapBomba";
import scrapDarwin from "./backend/scrapers/scrapDarwin";
import scrapMaximum from "./backend/scrapers/scrapMaximum";
import { Product } from "./backend/scrapers/types";

const config = require("./webpack.config");

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

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

/**
 * GET products
 */
app.get(
  "/search",
  [
    query("search")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    sanitizeQuery("notifyOnReply").toBoolean()
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return errors;
    }

    const { search } = req.query;

    return Promise.all([
      scrapDarwin(search),
      scrapMaximum(search),
      scrapBomba(search)
    ]).then((products: Product[][]) =>
      res.status(200).json({ products: ([] as Product[]).concat(...products) })
    );
  }
);

app.listen(9001);
