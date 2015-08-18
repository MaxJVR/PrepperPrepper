var db = require('../../models');
var express = require('express');
var router = express.Router();

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
        res.redirect('/');
      }
  });
});

//GET /login/logout
router.get('/logout',function(req,res){
  //req.flash('info','You have been logged out.');
  req.session.user = false;
  res.redirect('/');
});




module.exports = router;
