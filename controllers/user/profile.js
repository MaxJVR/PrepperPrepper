var express = require('express');
var request = require('request');
var router = express.Router();
var db = require("../../models");

/* GET home page. */
// router.get('/', function(req, res) {
//  res.render('user/profile', { user: req.currentUser });
// });

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

  if(req.currentUser){
    db.city.findById(req.currentUser.cityId).then(function(city){
      var url = 'http://api.wunderground.com/api/48693023b2ae4001/conditions/q/WA/' + city.name + '.json';
      request(url, function(error, response, data) {
       var parsedData = JSON.parse(data);
       var location = parsedData.current_observation.display_location.full;
       var temp = parsedData.current_observation.temp_f;
       var wind = parsedData.current_observation.wind_string;
       var icon = parsedData.current_observation.icon_url
        res.render('user/profile', {user: req.currentUser, userCity : city, location: location, temp: temp, wind: wind, icon: icon});
      })
    });
  }
  else{
    res.send('<h3>Please <a href="/signup">Create Account</a> or  <a href="/login">Log in</a> to view the profile page. </h3><ul><li><a href="/">Go Back</a></li></ul>');
  }

});

router.post("/", function(req,res){
  // save the users resources into their user account
  db.user.findOne({ where: { id : req.currentUser.id } }).then(function(user){
    db.city.findOne({ where: { id : user.cityId } }).then(function(city){

      user.gallons = parseInt(req.body.waterResourceHave);
      user.meals = parseInt(req.body.foodResourceHave);
      user.guns = parseInt(req.body.gunResourceHave);
      user.prepScore = parseInt((user.meals/city.reqMeals)+(user.gallons/city.reqGallons)+(user.guns/city.reqGuns));

      user.save().then(function(){
        res.redirect('/profile');
      });
    });
  });
});

module.exports = router;
