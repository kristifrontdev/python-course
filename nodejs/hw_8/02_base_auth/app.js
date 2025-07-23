const config = require("config");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { connectDB } = require("./db/db");
const sessionMiddleware = require("./db/session");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static(`${__dirname}/assets`));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sessionMiddleware);

app.use(
  morgan("tiny", {
    skip: (req) => req.url.startsWith("/.well-known"),
  })
);

app.use((req, res, next) => {
  res.locals.email = req.session?.email || null;
  res.locals.role = req.session?.role || null;
  next();
});

connectDB().then(({ usersCollection, tasksCollection }) => {
  app.use("/", require("./routes/index")());
  app.use("/", require("./routes/auth")({ usersCollection }));
  app.use("/", require("./routes/dashboard")({ tasksCollection }));
  app.use("/", require("./routes/common")());

  app.listen(config.port, () => {
    console.log(`Сервер запущено на http://localhost:${config.port}`);
  });
});
