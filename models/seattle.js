'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seattle = sequelize.define('Seattle', {
    sea_water: DataTypes.INTEGER,
    sea_guns: DataTypes.INTEGER,
    sea_food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Seattle;
};