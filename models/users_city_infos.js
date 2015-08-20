'use strict';
module.exports = function(sequelize, DataTypes) {
  var users_city_infos = sequelize.define('users_city_infos', {
    userId: DataTypes.INTEGER,
    cityInfoId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users_city_infos;
};