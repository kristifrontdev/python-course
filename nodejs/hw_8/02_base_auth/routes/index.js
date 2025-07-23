const express = require("express");
const router = express.Router();

module.exports = function () {
  router.get("/", async (req, res) => {
    res.render("main");
  });

  return router;
};
