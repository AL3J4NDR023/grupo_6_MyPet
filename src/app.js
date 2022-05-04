const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session= require('express-session');

//Rutas
const indexRouter = require('./routes/index');
const productoRoutes = require('.//routes/productsRoutes');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const userLoggedAll= require('./middlewares/userLoggedAll');
const productApi= require('./routes/api/productApiRoutes');

const bodyParser = require('body-parser');
const cors = require('cors');
//const usersRouter = require('./routes/users');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(session({
  secret:'grupo6',
  resave: false,
  saveUninitialized: false
}))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Middleware
app.use(userLoggedAll)

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/producto', productoRoutes);
//app.use('/users', usersRouter);

//API
//app.use('/api/products', productApi);


// catch 404 and forward to error handler
//app.use(function(req, res, next) {
  //next(createError(404));
//});

// error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
//});

module.exports = app;
