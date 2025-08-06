const express = require("express");
const router = express.Router();
const Article = require("../schemas/articleSchema");

router.get("/", async (req, res) => {
  const article = await Article.findById("6892f53738f3438ff8123f42");
  res.render("main", { article });
});

router.get("/page", async (req, res) => {
  const article = await Article.findById("6892f53738f3438ff8123f43");
  res.render("page", { article });
});

module.exports = router;
