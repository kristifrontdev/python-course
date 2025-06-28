const config = require('config');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const express = require('express');
const app = express();

const debugRoute = require('debug')('app:route');
const debugDb = require('debug')('app:db');

const mainRouter = require('./routes/main');
const aboutRouter = require('./routes/about');

// Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// app.use(morgan('combined', {stream : accessLogStream} ));
// app.use(morgan('tiny'));
// app.use(morgan('combined'));


app.use((req, res, next)=>{
    // console.log(req.method, req.url);
    debugRoute(`route: ${req.method} ${req.url}`);
    debugDb(`some text`);
    next();
});

app.use("/", mainRouter);
app.use("/about", aboutRouter);



app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.render('error');
});

module.exports = app;