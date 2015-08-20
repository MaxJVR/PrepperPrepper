var express = require('express');
var router = express.Router();
var db = require("../../models");

var form_generator = {};

form_generator.make_resource_slider = function(resource_name){
	var id = resource_name + "Input";
	var html_str = "";

	//html_str += '<div class="input-field">';
	//html_str += '<label for="'+id+'">Amount of '+resource_name+'</label>';
	html_str += '<div id="'+id+'" class="resourceSlider" ></div>'; //type="text" name="'+resource_name+'Amount'+'
	//html_str += '</div>'

	console.log(html_str);

	return html_str;
};

/* GET home page. */
// router.get('/', function(req, res) {
// 	res.render('user/profile', { user: req.currentUser });
// });

router.get('/', function(req, res) {
<<<<<<< HEAD
  db.city_info.findAll().then(function(all_cities){
    res.render('user/profile', {cities : all_cities, user: req.currentUser});
  });
});

router.post("/", function(req,res){
  db.user.update({
    prep_score: req.body.prep_score
  }).then(function(user){
    res.redirect('user/profile');
  });
=======
	res.render('user/profile', { user: req.currentUser, form_gen : form_generator });
>>>>>>> 76e7363652b6016c232fafa2df284e8e3b4c5f32
});

module.exports = router;

