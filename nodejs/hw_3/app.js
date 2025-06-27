const config = require("config");
const express = require("express");
const app = express();

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/json", (req, res) => {
  res.json({ title: "express", success: 1 });
});

app.get("/redirect", (req, res) => {
  res.redirect("/json");
});

app.get("/goods/:id", (req, res) => {
  res.json({ url: "goods", id: req.params.id });
});

app.get("/q", (req, res) => {
  res.json(req.query);
});

app.get("/random", (req, res) => {
  const min = Number(req.query.min);
  const max = Number(req.query.max);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({ min, max, random });
});

app.use((req, res) => {
  res.status(400).send("not found");
});
