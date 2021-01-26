import { Schema, model } from "mongoose";

const Article = {
  header: String,
  imageURL: String,
  newsURL: String,
  date: String,
  channel: String
};

const productsSchema = new Schema({
  news: [Article]
});

export const Products = model("products", productsSchema);
