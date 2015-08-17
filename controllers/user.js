//display login form
router.get('/',function(req,res){
    res.send('user/login');
});

//post/login
router.post('/',function(req,res){
  db.user.authenticate(req.body.email,req.body.password,
    function(err,user){
      if(err){
        res.send(err);
      }else if (user){
        req.session.user = user.id;//logged in.....
        req.flash('success', 'You are logged in')
        res.redirect('/');
      }else{
        req.flash('danger','invalid username or password');
        res.redirect('/user/login');
      }
  });
});


//auth/signup
router.get('/signup',function(req,res){
      res.render('user/signup');
});

//auth/signup
router.post('/signup',function(req,res){
      if(req.body.password != req.body.password2) {
      req.flash('danger', 'Password must match');
      res.redirect('/user/signup');
    } else {
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
          req.flash('success','You are signed up.')
          res.redirect('/');
        }else{
          req.flash('danger',"A user with that e-mail already exists");
          res.redirect('/user/signup');
        }
      }).catch(function(err){
        if(err.message){
          req.flash('danger',err.message);
        }else{
          req.flash('danger','unknown error');
          console.log(err);
        }
        res.redirect('/user/signup');
      })
    }
});

//auth/logout
router.get('/logout',function(req,res){
    req.flash('info', "You have been logged out.");
    req.session.user = false;
    res.redirect('/');
});

module.exports = router;
