'use strict';
module.exports = function(sequelize, DataTypes) {
  var resources = sequelize.define('resources', {
    water: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    guns: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.resource.belongsToMany(models.users,{through: "users_resources"});
        // associations can be defined here
      }
    }
  });
  return resources;
};