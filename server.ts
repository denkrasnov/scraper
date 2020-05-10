import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { query, sanitizeQuery, validationResult } from "express-validator";
import { MongoClient, Db } from "mongodb";

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

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const dbConnectionUrl = process.env.CONNECTION_URL;
// @ts-ignore TODO: remove ignore when start use db
let db: Db;

// Initialize DB connection
MongoClient.connect(
  dbConnectionUrl as string,
  { useUnifiedTopology: true },
  (err, database) => {
    if (err) throw err;
    db = database.db(process.env.DATABASE_NAME);
    // start the server
    app.listen(process.env.PORT, () => {});
  }
);

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

    return Promise.all([scrapMaximum(), scrapBomba(), scrapDarwin()]).then(
      products => {
        res
          .status(200)
          .json({ products: ([] as Product[]).concat(...products) });
      }
    );

    // Add products to db
    // db.collection("products").insertOne(
    //   { tv: ([] as Product[]).concat(...products) },
    //   (err, _result) => {
    //     if (err) return console.log(err);

    //     res.redirect("/");
    //     return undefined;
    //   }
    // );
    // return undefined;
  }
);
