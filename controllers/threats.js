var express = require('express');
var router = express.Router();
var db = require('../models');

var threat_scale = [];
threat_scale.push('minimal');
threat_scale.push('minimal-moderate');
threat_scale.push('moderate');
threat_scale.push('moderate-severe');
threat_scale.push('severe');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.query.city){
  	// It is possible for there to be multiple cities with the same name.
  	// This is why I am using Find instead of findAll
  	db.city_info.findAll({where: { name: req.query.city } }).then(function(city_results){
  		res.render('threats',{ cities: city_results, scale: threat_scale });
  	});

  }else{
  	res.send('You should pass the \'city\' parameter so this page can actually do something.');
  }

});

module.exports = router;
