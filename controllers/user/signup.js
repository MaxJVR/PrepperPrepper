var express = require('express');
var router = express.Router();

/* GET home page. */
//display sign-in page
router.get('/', function(req,res){
  res.render('auth/signup');
});

router.post('/',function(req,res){
    //do sign up here (add user to database)

    //user is signed up forward them to the home page
    res.redirect('/');
});
module.exports = router;
