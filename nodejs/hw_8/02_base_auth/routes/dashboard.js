const express = require("express");
const router = express.Router();

module.exports = function ({ tasksCollection }) {
  router.get("/dashboard", async (req, res) => {
    if (!req.session.email) return res.redirect("/login");

    try {
      const tasks = await tasksCollection.find({ role: req.session.role }).toArray();
      res.render("dashboard", { tasks });
    } catch (err) {
      res.status(500).send("Server error");
    }
  });

  return router;
};
