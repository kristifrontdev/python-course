const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /\s/.test(value.trim());
        },
        message: "Введіть повне ім'я та прізвище автора",
      },
    },
    year: {
      type: Number,
      required: true,
      set: (value) => {
        if (value >= 1700 && value <= 2026) {
          return value;
        }
      },
    },
  },
  {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true,
  }
);

const Element = mongoose.model("elements", elementSchema);

module.exports = Element;
