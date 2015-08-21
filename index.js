var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var app = express();

// set up a new session.
app.use(session({
  secret:'w8hi1v0lu89gwqu0moc8931fhyfidwa3r47v4',
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(ejsLayouts);
// app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/assets', express.static('public'));

// defines currentUser in the session
app.use(function(req,res,next){



	// req.session.user = 1; // COMMENT OUT WHEN NOT IN DEVELOPMENT

  if(req.session.user){


    db.user.findById(req.session.user).then(function(user){
      req.currentUser = user;
      next();
    });

  }else{
    req.currentUser = false;
    next();
  }
});


app.use(function(req,res,next){
  res.locals.currentUser = req.currentUser;
  next();
});

//landing page
app.use('/', require('./controllers/index'));
app.use('/threats', require('./controllers/threats'));
// use the user
app.use('/login', require('./controllers/user/login'));
app.use('/signup', require('./controllers/user/signup'));
app.use('/profile', require('./controllers/user/profile'));
app.use('/logout', require('./controllers/user/logout'));
// leaderboard
app.use('/leaderboard', require('./controllers/leaderboard'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen( process.env.PORT || 3000 );

module.exports = app;
