const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const insertRouter = require('./routes/user.insertRouter');
const deleteRouter = require('./routes/user.deleteRouter');
const findRouter = require('./routes/user.findRouter');
const updateRouter = require('./routes/user.updateRouter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//allow cross origin resource sharing
app.use(cors());
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database
mongoose
  .connect(config.url, config.options)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.error(err));

// all user routes
app.use('/', findRouter);
app.use('/', insertRouter);
app.use('/', updateRouter);
app.use('/', deleteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
