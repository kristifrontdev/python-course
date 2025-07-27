const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    birthDate: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(value.trim());
        },
        message: "Must be the format YYYY-MM-DD",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Must be valid email",
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[\+][0-9]{12}$/.test(value);
        },
        message: "Must be valid phone number",
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
