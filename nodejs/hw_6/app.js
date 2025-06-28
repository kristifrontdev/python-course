const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();

const messageRoutes = require("./routes/messageRoutes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny", { skip: (req, res) => req.url === "/.well-known/appspecific/com.chrome.devtools.json" }));

app.use("/", messageRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

module.exports = app;
