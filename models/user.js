var bcrypt = require('bcrypt');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    prep_score: DataTypes.INTEGER,
    city: DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models) {
        // models.user.hasMany(models.resources, {through: "user_resources"});
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