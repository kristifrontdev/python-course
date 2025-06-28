require("dotenv").config();
const he = require("he");
const fs = require("fs");
const path = require("path");
const express = require("express");
const moment = require("moment");
const app = express();

const PORT = process.env.PORT || 3100;
const messages = require("./messages.json");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.locals.moment = moment;
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/guests", (req, res) => {
  res.render("guests", { guests: messages });
});

app.post("/form", (req, res) => {
  const { username, message } = req.body;
  messages.push({
    username,
    message,
    createdAt: new Date().toISOString(),
  });
  fs.writeFile("messages.json", JSON.stringify(messages, null, 2), (err) => {
    if (err) return res.status(500).send("Error");
    res.redirect("/guests");
  });
});
