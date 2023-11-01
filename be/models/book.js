const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: { type: String },
  description: String,
  price: Number,
  stock: Number,
  imageUrl:{ type: String }
});

module.exports = mongoose.model("Book", bookSchema);
