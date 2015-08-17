'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    pw: DataTypes.STRING,
    email: DataTypes.STRING,
    prep_score: DataTypes.INTEGER,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          models.user.hasMany(models.resources, {through: "user_resources"});
        // associations can be defined here
      }
    }
  });
  return user;
};