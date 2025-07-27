const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      set: (value) => {
        if (value >= 1980 && value <= 2026) {
          return value;
        }
      },
    },
    color: {
      type: String,
      required: true,
      enum: ["silver", "gold", "black", "white"],
    },
    price: {
      type: Number,
      required: true,
      set: (value) => {
        if (value >= 0) {
          return value;
        }
      },
    },
    vin: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length === 17 && /^[0-9A-HJ-NPR-Z]{17}$/.test(value);
        },
        message: "17 символів, символи від 0 до 9 і латинській алфавіт крім I, O, Q. Регістр для літер - uppercase",
      },
    },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

const Element = mongoose.model("elements", elementSchema);

module.exports = Element;
