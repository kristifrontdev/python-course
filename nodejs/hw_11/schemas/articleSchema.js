const mongoose = require("mongoose");
const { commentSchema } = require("./commentSchema");

const articleSchema = new mongoose.Schema({
  title: String,
  url: { type: String, unique: true },
  content: String,
  comments: [commentSchema],
});

const Article = mongoose.model("articles", articleSchema);

module.exports = Article;
