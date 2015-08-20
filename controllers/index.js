var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
	db.city_info.findAll().then(function(all_cities){
		res.render('index', {cities : all_cities});
	});
});

city = "Seattle";
city_state = ["Seattle" : "WA"];
state = city_state[city];

var url = 'http://api.wunderground.com/api/48693023b2ae4001/conditions/q/'+state+'/'+city+'.json';
    request(url, function(error, response, data) {
      var parsedData = JSON.parse(data);
    };







module.exports = router;
