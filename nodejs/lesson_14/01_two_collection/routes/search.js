const express = require('express');
const Article = require('../db/articleSchema');
const Comment_1 = require('../db/comment_1Schema');
const { Types } = require('mongoose');
const router = express.Router();

// read
router.get('/', async (req, res) => {
  res.render('search')
});

router.post('/', async (req, res) => {
  const {text} = req.body;
  console.log(text);

  const comments = await Comment_1.find({
    text : {$regex : text, $options : 'i'}
  }).select('text article_id');

  res.json({"comments" : comments});
});


module.exports = router;
