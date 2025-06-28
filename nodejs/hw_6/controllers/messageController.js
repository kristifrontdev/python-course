const Message = require("../models/messageModel");

exports.home = (req, res) => {
  res.render("index");
};

exports.showForm = (req, res) => {
  res.render("form");
};

exports.submitForm = (req, res) => {
  const { username, text } = req.body;
  Message.add(username, text, new Date().getTime());
  res.redirect("/messages");
};

exports.showMessages = (req, res) => {
  const allMessage = Message.getAll;
  res.render("messages", {
    messages: allMessage,
  });
};
