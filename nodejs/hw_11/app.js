const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const app = express();
const Article = require("./schemas/articleSchema");

app.locals.moment = moment;
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(config.mongoUrl)
  .then(() => console.log("* - MongoDB connected"))
  .catch((err) => console.error("* - MongoDB connection error:", err));

app.get("/", async (req, res) => {
  const article = await Article.find({});
  const articleObj = article[0].toObject();
  articleObj.comments = article[0].comments.filter((comment) => comment.visible);
  res.render("article", { article: articleObj });
});

app.post("/create-comment/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.push(req.body);
    await article.save();
    res.redirect(`/`);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.post("/delete-comment/:articleId/:commentId", async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    article.comments = article.comments.filter((comment) => comment._id.toString() !== req.params.commentId);
    await article.save();
    res.redirect(`/`);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(config.port, () => {
  console.log(`* - Server is running on http://localhost:${config.port}`);
});
