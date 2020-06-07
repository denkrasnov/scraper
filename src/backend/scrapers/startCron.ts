import cron from "node-cron";
import chalk from "chalk";

import scrape from ".";

// start the job every day at 2:00 pms
const startCron = () =>
  cron.schedule("0 2 * * *", () => {
    scrape();
    console.log(chalk.bold.green("Cron job finished 🕑"));
  });

export default startCron;
