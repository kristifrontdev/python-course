const express = require('express');
const Article = require('../db/articleSchema');
const Comment = require('../db/commentSchema');
const { Types } = require('mongoose');
const router = express.Router();

// read
router.get('/', async (req, res) => {
  const articles = await Article.find();
  console.log('articles', articles)
  res.render('articles', { articles });
});


router.get('/:url', async (req, res) => {
  const article = await Article.findOne({ url: req.params.url }).select('title content');
  const articleId = article._id.toString();

  const comments = await Comment.find({ "article_id": articleId});
  console.log(comments);
  res.render('article', { article, comments });
});

module.exports = router;
