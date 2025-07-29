const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: true,
      set: (value) => {
        return value === "on" ? true : false;
      },
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comments", commentSchema);

module.exports = { Comment, commentSchema };
