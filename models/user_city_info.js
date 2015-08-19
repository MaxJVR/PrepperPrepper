'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_city_info = sequelize.define('user_city_info', {
    user_id: DataTypes.INTEGER,
    city_info_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_city_info;
};