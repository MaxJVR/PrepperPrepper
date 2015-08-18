var db = require('../../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
//display sign-in page
router.get('/', function(req,res){
  res.render('auth/signup');
});

router.post('/signup',function(req,res){
    //do sign up here (add user to database)
  if(req.body.password != req.body.password2){
    // req.flash('danger','Passwords must match.')
    res.redirect('/auth/signup');
  }else{
    db.user.findOrCreate({
      where:{
        email: req.body.email
      },
      defaults:{
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      }
    }).spread(function(user,created){
      if(created){
        // req.flash('success','You are signed up.')
        res.redirect('/');
      }else{
        // throw new Error('A user with that e-mail address already exists.');
        // res.send('A user with that e-mail address already exists.');
        // req.flash('danger','A user with that e-mail address already exists.');
        res.redirect('/auth/signup');
      }
    }).catch(function(err){
      if(err.message){
       // req.flash('danger',err.message);
      }else{
       // req.flash('danger','unknown error.');
        console.log(err);
      }
      res.redirect('/auth/signup');
    })
  }
});
    //user is signed up forward them to the home page

module.exports = router;
