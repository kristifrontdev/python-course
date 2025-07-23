const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { validateEmail, validatePassword, validateRole } = require("../helper");

module.exports = function ({ usersCollection }) {
  router.get("/login", (req, res) => {
    res.render("login");
  });

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const formattedEmail = email.toLowerCase().trim();
      const user = await usersCollection.findOne({ email: formattedEmail });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.render("login", {
          error: "Невірний логін або пароль",
          email,
        });
      }

      req.session.email = formattedEmail;
      req.session.role = user.role;

      res.redirect("/dashboard");
    } catch (err) {
      res.status(500).send("Server error");
    }
  });

  router.get("/register", (req, res) => {
    res.render("register");
  });

  router.post("/register", async (req, res) => {
    try {
      const { email, password, role } = req.body;
      const formattedEmail = email.toLowerCase().trim();

      const user = await usersCollection.findOne({ email: formattedEmail });
      if (user) {
        return res.render("register", {
          errors: { email: "* User exists" },
        });
      }

      const errors = {};
      if (validateEmail(email)) errors.email = validateEmail(email);
      if (validatePassword(password)) errors.password = validatePassword(password);
      if (validateRole(role)) errors.role = validateRole(role);

      if (Object.keys(errors).length > 0) {
        return res.render("register", { errors });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const data = {
        email: formattedEmail,
        password: hashPassword,
        role,
        createdAt: new Date().toISOString(),
      };

      await usersCollection.insertOne(data);

      req.session.email = formattedEmail;
      req.session.role = role;

      res.redirect("/dashboard");
    } catch (err) {
      res.status(500).send("Server error");
    }
  });

  router.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  });

  return router;
};
