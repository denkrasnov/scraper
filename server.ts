/* eslint-disable no-console */
import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import productsRoute from "./src/backend/routes/products";
import { error } from "./src/backend/scrapers/helpers/status";
// import { startCron } from "./src/backend/scrapers";
import { Products } from "./src/backend/models/products";
import { NewsCollection } from "./src/backend/scrapers/types";
import scrape from "./src/backend/scrapers/scrape";

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- newsfeed ---")}
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
  .then(() => {
    setTimeout(() => {
      scrape();
      // startCron();s
    }, 8000);
  })
  .catch((err) => console.log(error(err)));

mongoose.connection.on("error", (err) => {
  console.log(error(err));
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

app.use("/news", productsRoute);

/* ------ GRAPHQL START ------ */

const schema = buildSchema(`
  type Query {
    hello: String!
    news: [Article]!
  }

  type Article {
    _id: ID!
    date: String
    header: String
    imageURL: String
    newsURL: String
    channel: String
  }
`);

const resolvers = {
  hello: () => "Hello",
  news: async (_args: any, context: any) => {
    const { products } = context;
    const productsDocument = await products.find({});
    const news =
      ((productsDocument[0] as unknown) as NewsCollection)?.news || [];
    return news;
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context: { products: Products },
    graphiql: true
  })
);

/* ------ GRAPHQL END ------ */

app.listen(process.env.PORT, () => {});
