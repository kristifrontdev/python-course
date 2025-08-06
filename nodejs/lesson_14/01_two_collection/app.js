const config = require('config');

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sessionMiddleware = require('./db/session');

const connectDB = require('./db/db');

const app = express();

const articles_1Router = require('./routes/articles_1');
const mainRouter = require('./routes/main');
const commentRouter = require('./routes/comment');
const searchRouter = require('./routes/search');

// Setups
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(`${__dirname}/assets`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use(sessionMiddleware);

app.use(morgan('tiny', {
  skip: req => req.url.startsWith('/.well-known')
}));

app.use((req, res, next) => {
  app.locals.user = req.session?.user || null;
  app.locals.email = req.session?.email || null;
  next();
});

connectDB().then(() => {
  app.use('/', mainRouter);
  app.use('/articles_1', articles_1Router);
  app.use('/comment', commentRouter);
  app.use('/search', searchRouter);

  app.listen(config.port, () => {
    console.log('Сервер запущено на http://localhost:' + config.port);
  });
});
