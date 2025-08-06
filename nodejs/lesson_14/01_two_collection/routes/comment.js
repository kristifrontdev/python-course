const express = require('express');
const Article = require('../db/articleSchema');
const Comment_1 = require('../db/comment_1Schema');
const { Types } = require('mongoose');
const router = express.Router();

// read
router.get('/', async (req, res) => {
  res.end('1');
});


router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  const comment = await Comment_1.findById(req.params.id).populate('article_id');
  // console.log(comment.article_id.url);

  res.render('comment', { comment });
});

module.exports = router;
