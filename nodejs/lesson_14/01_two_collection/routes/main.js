const express = require('express');
const Article = require('../db/articleSchema');
const Comment = require('../db/commentSchema');
const router = express.Router();

// read
router.get('/', async (req, res) => {
  const articles = await Article.find().select('title prev url');
  const result = await Comment.aggregate([
    { $match: { visible: true } },
    {
      $group: {
        _id: "$article_id",
        count: { $sum: 1 }
      }
    }
  ]);
  console.log('articles', articles);
  console.log(result);
  const commentsCount = result.reduce((accum, item) => {
    accum[item._id] = item.count;
    return accum;
  }, {}
  );

  console.log(commentsCount);
  res.render('main', { 'articles': articles, 'commentsCount' : commentsCount});
});

module.exports = router;
