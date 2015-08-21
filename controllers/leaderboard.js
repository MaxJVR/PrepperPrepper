var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET leaderboard. */
router.get('/', function(req, res) {
  db.user.findAll({order: '"prepScore" DESC'}).then(function(users){
    res.render('leaderboard',{user: req.currentUser, users: users});
  });
});

module.exports = router;
