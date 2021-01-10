import cron from "node-cron";
import chalk from "chalk";

// import scrape from "./scrape";

// start the job at 0 seconds, 0 minutes every 3rd hour'
const startCron = () =>
  cron.schedule("0 0 */3 * * *", () => {
    // scrape();
    console.log(chalk.bold.green("Cron job finished 🕑"));
  });

export default startCron;
