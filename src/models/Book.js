import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, require: true },
  publish: { type: String },
  pages: { type: Number },
  price: { type: Number },
}, { versionKey: false });

const book = mongoose.model('books', bookSchema);

export default book;