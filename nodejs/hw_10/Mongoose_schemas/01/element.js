const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 300,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      set: (value) => {
        if (Array.isArray(value)) {
          return value.map((tag) => String(tag).trim()).filter((tag) => tag !== "");
        }
        return [];
      },
    },
    published: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

const Element = mongoose.model("elements", elementSchema);

module.exports = Element;
