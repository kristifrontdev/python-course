const express = require("express");
const router = express.Router();

module.exports = function () {
  router.get("/common", async (req, res) => {
    res.render("common");
  });

  return router;
};
