var bcrypt = require('bcrypt');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    prep_score: DataTypes.INTEGER,
    city: DataTypes.STRING,
    gallons: DataTypes.INTEGER,
    meals: DataTypes.INTEGER,
    guns: DataTypes.INTEGER,
  },
  {
    classMethods: {
      associate: function(models) {
        // models.user.hasOne(models.city_info, {through: "users_city_infos"});

      },
      authenticate: function(email,password,callback){
        this.find({where:{email:email}}).then(function(user){
          if(user){
            bcrypt.compare(password,user.password,function(err,result){
              if(err){
                callback(err);
              }else{
                callback(null, result ? user : false);
              }
            });
          }
          else{
            callback(null, false);
          }
        }).catch(callback);
      }
    },
    hooks: {
      beforeCreate: function(user, options, cb) {
        // make salt and hash password for safe storage ussing bcrypt
        bcrypt.genSalt(10, function(err, salt) {
          var unsafe_pass = user.password;
          bcrypt.hash(unsafe_pass, salt, function(err, hash){
            user.password = hash;
            cb(null,user);
          });
        });
      }
    }
  });
  return user;
};