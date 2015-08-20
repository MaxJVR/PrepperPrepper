'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      reqGallons: {
        type: Sequelize.INTEGER
      },
      reqMeals: {
        type: Sequelize.INTEGER
      },
      reqGuns: {
        type: Sequelize.INTEGER
      },
      floodInfo: {
        type: Sequelize.TEXT
      },
      earthquakeInfo: {
        type: Sequelize.TEXT
      },
      marauderInfo: {
        type: Sequelize.TEXT
      },
      floodThreatLevel: {
        type: Sequelize.INTEGER
      },
      earthquakeThreatLevel: {
        type: Sequelize.INTEGER
      },
      marauderThreatLevel: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('cities');
  }
};