const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      enum: ["білий", "чорний", "синій", "червоний", "зелений"],
    },
    material: {
      type: String,
      required: false,
      trim: true,
    },
    heightCm: {
      type: Number,
      required: true,
      set: (value) => {
        if (value >= 0 && value <= 100) {
          return value;
        }
      },
    },
    powerW: {
      type: Number,
      required: true,
      set: (value) => {
        if (value >= 0 && value <= 100) {
          return value;
        }
      },
    },
    bulbType: {
      type: String,
      required: true,
      enum: ["E27", "E14", "G4", "G9"],
    },
    dimmable: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true,
  }
);

const Element = mongoose.model("elements", elementSchema);

module.exports = Element;
