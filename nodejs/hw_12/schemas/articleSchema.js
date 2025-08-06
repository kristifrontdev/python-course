const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  caption: { type: Object, required: true },
  text: { type: Object, required: true },
  image: { type: String, required: true },
});

const Article = mongoose.model("pages", articleSchema);

module.exports = Article;
