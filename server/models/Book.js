import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, require: true },
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
    publishDate: { type: String, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Books", bookSchema);

export default Book