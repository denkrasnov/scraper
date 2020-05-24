import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import mongoose from "mongoose";

import productsRoute from "./src/backend/routes/products";

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
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch((error) => console.log(chalk.bold.red(error))); // eslint-disable-line no-console

mongoose.connection.on("error", (error) => {
  console.log(chalk.bold.red(error)); // eslint-disable-line no-console
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use("/search", productsRoute);

app.listen(process.env.PORT, () => {});
