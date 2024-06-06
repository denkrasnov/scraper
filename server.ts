/* eslint-disable no-console */
import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import chalk from "chalk";
import mongoose, { Model, Document } from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import productsRoute from "./src/backend/routes/products";
import { error } from "./src/backend/scrapers/helpers/status";
// import { scrape } from "./src/backend/scrapers";
import { NewsModel } from "./src/backend/models/news";
import { Locale } from "./src/types";

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- newsfeed ---")}
 The server is available on ${chalk.hex("#f7c132")(
   `${isDevelopment ? `http://localhost:3000` : process.env.PORT}`
 )}
\n`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const dbConnectionUrl = process.env.CONNECTION_URL;

// Initialize DB connection
// mongoose
//   .connect(dbConnectionUrl!, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     setTimeout(() => {
//       startCron();
//     }, 8000);
//   })
//   .catch((err) => console.log(error(err)));

// scrape();

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

// keep the endpoint to teach Daniil about REST API
app.use("/news", productsRoute);

/* ------ GRAPHQL START ------ */
const schema = buildSchema(`
  type Query {
    news(locale: String!): [Article]!
  }

  type Article {
    id: ID
    date: String
    header: String
    imageURL: String
    newsURL: String
    channel: String
  }
`);

const localeRealm = {
  [Locale.MD]: "md_MD",
  [Locale.RU]: "md_RU"
};

const resolvers = {
  news: async (
    args: { locale: Locale },
    context: { newsModel: Model<Document> }
  ) => {
    const selectByFieldName = localeRealm[args.locale];
    const { newsModel } = context;

    const query = await newsModel.find({}).select(selectByFieldName);

    const news =
      // @ts-ignore
      query[0]?.[selectByFieldName]?.map((item: any) => item.transform()) || [];

    return news.filter((item: any) => !!item);
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context: { newsModel: NewsModel },
    graphiql: true
  })
);

/* ------ GRAPHQL END ------ */

app.listen("3000", () => {});
