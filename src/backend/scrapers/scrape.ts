import fs from "fs/promises";

import { error } from "./helpers/status";
import getEMacedoEN from "./EMacedoEN";

const scrape = async () => {
  const products = await Promise.all([getEMacedoEN()]);

  try {
    await fs.writeFile("macedoEN.json", JSON.stringify(products[0]));
  } catch (err) {
    console.log(error("❌ ERROR: No collection to drop", err));
  }
};

export default scrape;
