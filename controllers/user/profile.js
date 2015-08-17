var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('Show the user their profile.');	
});

module.exports = router;
