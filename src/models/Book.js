import mongoose from "mongoose";
import {authorSchema} from "./Author.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, require: true },
  publish: { type: String },
  pages: { type: Number },
  price: { type: Number },
  author: authorSchema
}, { versionKey: false });

const book = mongoose.model('books', bookSchema);

export default book;