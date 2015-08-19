//GET /login/logout
var db = require('../../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  //req.flash('info','You have been logged out.');
  req.session.user = false;
  res.redirect('/');
});

module.exports = router;