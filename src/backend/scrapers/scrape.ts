/* eslint-disable camelcase */
import fs from "fs/promises";

import { error } from "./helpers/status";
import getEMacedo from "./EMacedo";

const scrape = async () => {
  const products = await Promise.all([getEMacedo()]);

  try {
    await fs.writeFile("macedo.json", JSON.stringify(products[0]));
  } catch (err) {
    console.log(error("❌ ERROR: No collection to drop", err));
  }
};

export default scrape;
