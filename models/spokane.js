'use strict';
module.exports = function(sequelize, DataTypes) {
  var Spokane = sequelize.define('Spokane', {
    spok_water: DataTypes.INTEGER,
    spok_guns: DataTypes.INTEGER,
    spok_food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Spokane;
};