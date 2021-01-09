import { Products } from "../models/products";
import { error } from "./helpers/status";
import getTV8News from "./TV8";

const scrape = async () => {
  const products = await Promise.all([getTV8News()]);
  const news = products.flat();

  try {
    await Products.collection.drop();
  } catch (err) {
    console.log(error("❌ ERROR: No collection to drop", err));
  }

  const newsProducts = new Products({ news });

  newsProducts.save((err) => {
    if (err) console.log(error("❌ ERROR: Collection is not saved:", err));
  });

  return newsProducts;
};

export default scrape;
