import { Schema, model } from "mongoose";

const Product = {
  title: String,
  price: String,
  imageUrl: String,
  id: String,
  noImage: Boolean,
  shop: String
};

const productsSchema = new Schema({
  tv: [Product],
  fridge: [Product]
});

export const Products = model("products", productsSchema);
