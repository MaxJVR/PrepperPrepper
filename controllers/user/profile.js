var express = require('express');
var router = express.Router();
var db = require("../../models");

/* GET home page. */
// router.get('/', function(req, res) {
//  res.render('user/profile', { user: req.currentUser });
// });

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
			res.render('user/profile', {user: req.currentUser, city : city});
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