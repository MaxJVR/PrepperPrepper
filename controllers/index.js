var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
<<<<<<< HEAD
	db.city_info.findAll().then(function(all_cities){
		res.render('index', {cities : all_cities});
	});
=======
  res.render('auth/index');
>>>>>>> 5fb8b1c1219733baf044f8f92b23693156cfb0c1
});

module.exports = router;
