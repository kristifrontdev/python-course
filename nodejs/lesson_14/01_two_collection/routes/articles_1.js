const express = require('express');
const Article = require('../db/articleSchema');
const Comment = require('../db/commentSchema');
const { Types } = require('mongoose');
const Comments_1 = require('../db/comment_1Schema');
const router = express.Router();

// read
router.get('/', async (req, res) => {
  const articles = await Article.find();
  console.log('articles', articles)
  res.render('articles', { articles });
});


router.get('/:url', async (req, res) => {
  // const article = await Article.findOne({ url: req.params.url }).select('title content');
  // const articleId = article._id.toString();

  // const comments = await Comment.find({ "article_id": articleId});
  // console.log(comments);
  // res.render('article', { article, comments });

  // ===== Aggregate
  // const result = await Article.aggregate([
  //   { $match: { url: req.params.url } },
  //   {
  //     $lookup: {
  //       from: 'comments_1',
  //       localField: '_id',
  //       foreignField: 'article_id',
  //       as: 'comments'
  //     },
  //   },
  //   {
  //     $addFields: {
  //       comments: {
  //         $filter: {
  //           input: '$comments',
  //           as: 'comment',
  //           cond: { $eq: ['$$comment.visible', true] }
  //         }
  //       }
  //     }
  //   }
  // ]);
  // console.log(result)
  // res.render('article_1', {"article" : result[0], comments : result[0].comments})

  // =========== pagination ================
  const article = await Article.findOne({ url: req.params.url }).select('title content');
  const articleId = article._id;

  const limit = 5;
  // ?page=2
  const page = parseInt(req.query.page) || 1;

  const comments = await Comments_1
    .find({article_id : articleId})
    .sort({createdAt : -1})
    .skip((page - 1)* limit)
    .limit(limit);

  const total = await Comments_1.countDocuments(
    {article_id : articleId}
  );

  console.log(total);

  const totalPages = Math.ceil(total/limit);

  res.render('article' , {
      "article" : article,
      "comments" : comments,
      "currentPage" : page,
      "totalPages" : totalPages
  })


});


module.exports = router;
