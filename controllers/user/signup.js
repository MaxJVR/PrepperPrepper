var express = require('express');
var router = express.Router();
var db = require('../../models');

/* GET home page. */
//display sign-in page
router.get('/', function(req,res){
	if(req.query.city){
  		res.render('auth/signup', { city : req.query.city });
  	}
});

router.post('/',function(req,res){
	//res.send(req.body);

	db.user.create({
		name : req.body.name,
		email : req.body.email,
		password : req.body.password,
		city : req.body.city,
	}).then(function(new_user){
		res.send(new_user.get());
	});
});

module.exports = router;