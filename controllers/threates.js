var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.query.city){
  	// It is possible for there to be multiple cities with the same name.
  	// This is why I am using Find instead of findAll
  	db.city_info.findAll({where: { name: req.query.city } }).then(function(city_results){
  		res.render('threats',{ cities : city_results });
  	});

  }else{
  	res.send('You should pass the \'city\' parameter so this page can actually do something.');
  }

});

module.exports = router;
