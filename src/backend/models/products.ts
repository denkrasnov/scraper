import { Schema, model } from "mongoose";

const Product = {
  header: String,
  imageURL: String,
  newsURL: String,
  date: String
};

const productsSchema = new Schema({
  news: [Product]
});

export const Products = model("products", productsSchema);
