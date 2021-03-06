/* eslint-disable  */
import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  header: String,
  imageURL: String,
  newsURL: String,
  date: String,
  channel: String
});

articleSchema.method("transform", function (this: { toObject: () => any }) {
  let obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

const newsSchema = new Schema({
  md_MD: [articleSchema],
  md_RU: [articleSchema]
});

export const NewsModel = model("news", newsSchema);
