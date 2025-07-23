var validator = require("validator");

const validatePassword = (password) => {
  if (!password || password.trim() === "") return "* Password is required";
  if (password.length < 6) return "* Password should be at least 6 characters long";
  return false;
};

const validateRole = (role) => {
  if (!role) return "* Role is required";
  if (role !== "user" && role !== "admin") return "* Role should be either 'user' or 'admin'";
  return false;
};

const validateEmail = (email) => {
  if (!email || email.trim() === "") return "* Email is required";
  if (!validator.isEmail(email)) return "* Invalid email address";
  return false;
};

module.exports = { validatePassword, validateRole, validateEmail };
