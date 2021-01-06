import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import mongoose from "mongoose";

import productsRoute from "./src/backend/routes/products";
// import scrape from "./src/backend/scrapers";
// import { runTest } from "./src/backend/scrapers/scrapeTest";

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- Compare md ---")}
 The server is available on ${chalk.hex("#f7c132")(
   `${
     isDevelopment ? `http://localhost:${process.env.PORT}` : process.env.PORT
   }`
 )}
\n`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbConnectionUrl = process.env.CONNECTION_URL;

// Initialize DB connection
mongoose
  .connect(dbConnectionUrl!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  // .then(() => {
  //   setTimeout(() => runTest(), 5000);
  // })
  .catch((error) => console.log(chalk.bold.red(error))); // eslint-disable-line no-console

mongoose.connection.on("error", (error) => {
  console.log(chalk.bold.red(error)); // eslint-disable-line no-console
});

if (isDevelopment) {
  /* eslint-disable global-require */
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require("./webpack.dev");

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
  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "../")));
  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
}

app.use("/search", productsRoute);

app.listen(process.env.PORT, () => {});
