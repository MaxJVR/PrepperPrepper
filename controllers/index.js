var express = require('express');
var router = express.Router();

var sample_db = [{'name':'Seattle'},{'name':'Redmond'},{'name':'Bellevue'},{'name':'Issaquah'}];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
