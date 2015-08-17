'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shoreline = sequelize.define('Shoreline', {
    sho_water: DataTypes.INTEGER,
    sho_guns: DataTypes.INTEGER,
    sho_food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shoreline;
};