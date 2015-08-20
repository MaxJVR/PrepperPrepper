var express = require('express');
var router = express.Router();
var db = require("../../models");

/* GET home page. */
// router.get('/', function(req, res) {
// 	res.render('user/profile', { user: req.currentUser });
// });

router.get('/', function(req, res) {

	//res.render('user/profile', { user: req.currentUser });

	/*db.city_info.findAll().then(function(all_cities){
		res.render('user/profile', {cities : all_cities, user: req.currentUser});
	});*/

  //db.city_info.findAll({include:[db.user]}).then(function(all_cities){

/*	db.city.findAll({include:[db.user]}).then(function(all_cities){
		res.render('user/profile', {cities : all_cities, user: req.currentUser});
	});
*/

	if(req.currentUser){
		db.city.findById(req.currentUser.cityId).then(function(city){
			res.render('user/profile', {user: req.currentUser, city : city});
		});
    }
    else{
		res.send('You do not have an account!');
	}
    
});

router.post("/", function(req,res){
	res.send(req.body);
	
	/*db.user.update({
		prep_score: req.body.prep_score
	}).then(function(user){
		res.redirect('user/profile');
	});*/
});

module.exports = router;

