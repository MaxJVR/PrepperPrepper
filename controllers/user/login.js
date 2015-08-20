var express = require('express');
var router = express.Router();
var db = require('../../models');

//display login form
router.get('/',function(req,res){
    res.render('auth/login');
});

//post/login
router.post('/',function(req,res){
  db.user.authenticate(req.body.email,req.body.password,function(err,user){
      if(err){
        res.send("err");
      }else if (user){
        req.session.user = user.id;//logged in.....
        //req.flash('success', 'You are logged in')
        res.redirect('/');
      }else{
        //req.flash('danger','invalid username or password');
        res.send('failed!');
        //res.redirect('/');
      }
  });
});

module.exports = router;