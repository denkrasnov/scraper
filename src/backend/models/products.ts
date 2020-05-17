import { Schema, model } from "mongoose";

// create schema
const productsSchema = new Schema({
  products: [
    {
      title: String,
      price: String,
      imageUrl: String,
      id: String,
      noImage: Boolean
    }
  ]
});

// create model
export const Products = model("products", productsSchema);
