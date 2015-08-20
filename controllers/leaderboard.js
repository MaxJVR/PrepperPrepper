var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET leaderboard. */
router.get('/', function(req, res) {
  db.user.findAll().then(function(all_users){
    res.render('leaderboard',{user: req.currentUser});
  });
});

module.exports = router;
