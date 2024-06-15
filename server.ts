import express, { Application, Request, Response } from "express";
import path from "path";
import chalk from "chalk";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import fs from "fs/promises";

import { NewsModel } from "./src/backend/models/news";
// import { Locale } from "./src/types";
// import mongoose, { Model, Document } from "mongoose";
// import productsRoute from "./src/backend/routes/products";
// import { error } from "./src/backend/scrapers/helpers/status";
// import { scrape } from "./src/backend/scrapers";

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- unknown ---")}
 The server is available on ${chalk.hex("#f7c132")(
   `${isDevelopment ? `http://localhost:3000` : process.env.PORT}`
 )}
\n`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// mongoose.connection.on("error", (err) => {
//   console.log(error(err));
// });

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

// Use GraphQL instead
// app.use("/news", productsRoute);

/* ------ GRAPHQL START ------ */
const schema = buildSchema(`
  type Query {
    news(locale: String!): [Article]!
  }

  type Article {
    id: ID
    postDate: String
    title: String
    imageURL: String
    text: String
  }
`);

// const localeRealm = {
//   [Locale.MD]: "md_MD",
//   [Locale.RU]: "md_RU"
// };

const resolvers = {
  news: async () =>
    // args: { locale: Locale },
    // context: { newsModel: Model<Document> }
    {
      // const selectByFieldName = localeRealm[args.locale];
      // const { newsModel } = context;

      // const query = await newsModel.find({}).select(selectByFieldName);

      // const news =
      //   // @ts-ignore
      //   query[0]?.[selectByFieldName]?.map((item: any) => item.transform()) || [];

      try {
        const data = await fs.readFile("./macedo.json", "utf8");
        const articles = JSON.parse(data);
        return articles;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
};

app.use(
  "/graphql",
  createHandler({
    schema,
    rootValue: resolvers,
    context: { newsModel: NewsModel }
  })
);

/* ------ GRAPHQL END ------ */

app.listen("3000", () => {});
