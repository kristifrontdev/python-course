const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const i18n = require("i18n");
const path = require("path");
const app = express();

i18n.configure({
  locales: config.supportedLangs,
  directory: path.join(__dirname, "locales"),
  defaultLocale: config.defaultLocale,
  queryParameter: "lang",
  cookie: "lang",
  autoReload: true,
  updateFiles: false,
  syncFiles: false,
});

app.locals.moment = moment;
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(i18n.init);

mongoose
  .connect(config.mongoUrl)
  .then(() => console.log("* - MongoDB connected"))
  .catch((err) => console.error("* - MongoDB connection error:", err));

app.use("/", require("./utils/setLang"));

app.use("/:lang", require("./routes/main"));

app.use((req, res) => {
  res.status(404).render("404", { url: req.originalUrl });
});

app.listen(config.port, () => {
  console.log(`* - Server is running on http://localhost:${config.port}`);
});
