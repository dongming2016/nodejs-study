var createError = require('http-errors');
var express = require('express');
//获取模块
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 创建 application/json 解析
var jsonParser = bodyParser.json();

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userMgrRouter = require('./routes/userMgr');
var uploaderHandler = require('./routes/uploaderHandler');
var imgHandler = require('./routes/imgHandler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(urlencodedParser);
app.use(cookieParser());
var filePath = path.resolve() + '/uploads/';
app.use(express.static(filePath));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', urlencodedParser, uploaderHandler);
app.use('/user-mgr', userMgrRouter);
app.use('/pics', imgHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
