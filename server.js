/* eslint-env node */
const path = require("path");
const app = require("express")();
const bodyParser = require("body-parser");
const chalk = require("chalk");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const { query, sanitizeQuery, validationResult } = require("express-validator");

const scrap = require("./scraper");
const config = require("./webpack.config");

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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
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
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return errors;
    }

    const { search } = req.query;

    return scrap(search).then(products => res.status(200).json({ products }));
  }
);

app.listen(9001);
