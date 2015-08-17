var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.query.location){
  	res.send('location paramater passed: ' + req.query.location);	
  }else{
  	res.send('should pass paramater to this url');
  }

});

module.exports = router;
