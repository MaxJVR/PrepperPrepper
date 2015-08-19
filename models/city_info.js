'use strict';
module.exports = function(sequelize, DataTypes) {
  var city_info = sequelize.define('city_info', {
    name: DataTypes.STRING,
    flood_info: DataTypes.STRING,
    earthquake_info: DataTypes.STRING,
    marauder_info: DataTypes.STRING,
    flood_threat_level: DataTypes.INTEGER,
    earthquake_threat_level: DataTypes.INTEGER,
    marauder_threat_level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return city_info;
};