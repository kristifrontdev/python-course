const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  article_id: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Article', 
    type: String,
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

const Comments = mongoose.model('comments', commentSchema);

module.exports = Comments;