'use strict';
module.exports = function(sequelize, DataTypes) {
  var resources = sequelize.define('resources', {
    water: DataTypes.INTEGER,
    guns: DataTypes.INTEGER,
    food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        model.resources.belongsToMany(model.users, {through:'user_resources'});
      }
    }
  });
  return resources;
};