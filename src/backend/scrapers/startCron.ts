import cron from "node-cron";

// TODO: Configure cron to start all scrappers every 2:00 pm
const startCron = () =>
  cron.schedule("* * * * *", () => {
    // eslint-disable-next-line no-console
    console.log("running a task every minute");
  });

export default startCron;
