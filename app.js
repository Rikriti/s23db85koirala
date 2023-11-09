var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Plants = require('./models/plants');



require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

// We can seed the collection if needed on server start
async function recreateDB() {

  // Delete everything
  await Plants.deleteMany();

  let instance1 = new
    Plants({
      name: "Lily",
      category: "Flower",
      price: 10
    });
  let instance2 = new
    Plants({
      name: "Mango Tree",
      category: "Tree",
      price: 25
    });
  let instance3 = new
    Plants({
      name: "Cactus",
      category: "Cactus",
      price: 35
    });

  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}

let reseed = true;
if (reseed) { recreateDB(); }
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var elephantRouter=require('./routes/elephant');
var boardRouter=require('./routes/board');
var ChooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var pl=require('./routes/plants');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/elephant',elephantRouter);
app.use('/board',boardRouter);
app.use('/choose', ChooseRouter);
app.use('/resource', resourceRouter);
app.use('/plants', pl);

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