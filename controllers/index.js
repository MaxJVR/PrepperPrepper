var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
	db.city.findAll().then(function(all_cities){
		res.render('index', {cities : all_cities});
	});
});

module.exports = router;
