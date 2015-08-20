'use strict';
module.exports = function(sequelize, DataTypes) {
  var city = sequelize.define('city', {
    name: DataTypes.STRING,
    reqGallons: DataTypes.INTEGER,
    reqMeals: DataTypes.INTEGER,
    reqGuns: DataTypes.INTEGER,
    floodInfo: DataTypes.TEXT,
    earthquakeInfo: DataTypes.TEXT,
    marauderInfo: DataTypes.TEXT,
    floodThreatLevel: DataTypes.INTEGER,
    earthquakeThreatLevel: DataTypes.INTEGER,
    marauderThreatLevel: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.city.hasMany(models.user)
        // associations can be defined here
      }
    }
  });
  return city;
};
