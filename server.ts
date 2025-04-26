/* eslint-disable global-require */
import express, { Application } from "express";

import chalk from "chalk";

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
const app: Application = express();

process.stdout.write(`
 ${chalk.bgHex("#224dff").white("--- scraper ---")}
 The server is available on ${chalk.hex("#f7c132")(
   `${isDevelopment ? `http://localhost:3000` : process.env.PORT}`
 )}
\n`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Enable to scrape data */
// scrape();

app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen("3000", () => {});
