'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_resources = sequelize.define('user_resources', {
    user_id: DataTypes.INTEGER,
    resource_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_resources;
};