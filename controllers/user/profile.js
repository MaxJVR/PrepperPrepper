var express = require('express');
var request = require('request');
var router = express.Router();
var db = require("../../models");

/* GET home page. */
// router.get('/', function(req, res) {
//  res.render('user/profile', { user: req.currentUser });
// });

// city = "Seattle";
// city_state = ["Seattle":"WA"];
// state = city_state[city];

// router.get('/', function(req, res) {    //fetching weather data
//     var url = 'http://api.wunderground.com/api/48693023b2ae4001/conditions/q/WA/Seattle.json';
//  request(url, function(error, response, data) {
//    var parsedData = JSON.parse(data);
//    var location = parsedData.current_observation.display_location.full;
//    var temp = parsedData.current_observation.temp_f;
//    var wind = parsedData.current_observation.wind_string;
//      res.render('user/profile', {location: location, temp: temp, wind: wind});
//  })
// }

/*
add to view
<h1><%= location %></h1>
<h1><%= temp %></h1>
<h1><%= wind %></h1>
*/


router.get('/', function(req, res) {

  //res.render('user/profile', { user: req.currentUser });

  /*db.city_info.findAll().then(function(all_cities){
    res.render('user/profile', {cities : all_cities, user: req.currentUser});
  });*/

  //db.city_info.findAll({include:[db.user]}).then(function(all_cities){

/*  db.city.findAll({include:[db.user]}).then(function(all_cities){
    res.render('user/profile', {cities : all_cities, user: req.currentUser});
  });
*/

  if(req.currentUser){
    db.city.findById(req.currentUser.cityId).then(function(city){
      var url = 'http://api.wunderground.com/api/48693023b2ae4001/conditions/q/WA/' + city.name + '.json';
      request(url, function(error, response, data) {
       var parsedData = JSON.parse(data);
       var location = parsedData.current_observation.display_location.full;
       var temp = parsedData.current_observation.temp_f;
       var wind = parsedData.current_observation.wind_string;
       var icon = parsedData.current_observation.icon_url
        res.render('user/profile', {user: req.currentUser, city : city, location: location, temp: temp, wind: wind, icon: icon});
      })
    });
  }
    else{
    res.send('<h3>Why would you try and view a profile page if you are not signed in? Come on; use your head... </h3><ul><li><a href="/signup">Create Account</a></li><li><a href="/login">Log in</a></li><li><a href="/">Go Back</a></li></ul>');
  }

});

router.post("/", function(req,res){
  db.user.update({
    prepScore:(user.meals / city.reqMeals)
    // pre score = (user.meals/city.reqMeals)+(user.gallons/city.reqGallons)+(user.guns/city.reqGuns)
  }).then(function(user){
    res.redirect('user/profile');
  });
  res.render('user/profile', { user: req.currentUser, form_gen : form_generator });
});

module.exports = router;