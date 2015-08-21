var express = require('express');
var router = express.Router();
var db = require('../models');
var request = require('request');
var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res) {
	db.city.findAll().then(function(all_cities){
		res.render('index', {cities : all_cities});
	});
});

//city = "Seattle";
//city_state = ["Seattle" : "WA"];
//state = city_state[city];

router.get('/apitest', function(req, res) {
var url = 'http://api.wunderground.com/api/48693023b2ae4001/conditions/q/WA/Seattle.json';
    request(url, function(error, response, data) {
      var parsedData = JSON.parse(data);
      var location = parsedData.current_observation.display_location.full;
      //var temp = parsedData.current_observation.temp_f;
      //var wind = parsedData.current_observation.wind_string;

      // var newMovie = new Movie(movieId, title, year, plot);
      // movie.push(newMovie);
      res.send("/apitest", {data: location});
    })

})







module.exports = router;
