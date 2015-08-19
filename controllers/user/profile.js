var express = require('express');
var router = express.Router();
var db = require("../../models");

/* GET home page. */
// router.get('/', function(req, res) {
// 	res.render('user/profile', { user: req.currentUser });
// });

router.get('/', function(req, res) {
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
});

module.exports = router;

