'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bellevue = sequelize.define('Bellevue', {
    bell_water: DataTypes.INTEGER,
    bell_guns: DataTypes.INTEGER,
    bell_food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bellevue;
};