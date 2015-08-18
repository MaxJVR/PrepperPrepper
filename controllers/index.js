var express = require('express');
var router = express.Router();

var sample_db = [{'name':'Seattle'},{'name':'Redmond'},{'name':'Bellevue'},{'name':'Issaquah'}];

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PrepperPrepper', db : sample_db });
=======
router.get('/', function(req, res) {
  res.render('main/index');
>>>>>>> b0097b6e7553a5678728881d7ac849ca4910fc7a
});

module.exports = router;
