const mongoose = require('mongoose');

const comment_1Schema = new mongoose.Schema({
  article_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'articles', 
    // type: String,
    required: true,
  },
   author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', 
    required: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const Comments_1 = mongoose.model('comments_1', comment_1Schema);

module.exports = Comments_1;