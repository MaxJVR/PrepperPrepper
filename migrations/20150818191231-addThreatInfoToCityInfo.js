'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('city_infos', 'flood_threat_level', {type: Sequelize.INTEGER}),
      queryInterface.addColumn('city_infos', 'earthquake_threat_level', {type: Sequelize.INTEGER}),
      queryInterface.addColumn('city_infos', 'marauder_threat_level', {type: Sequelize.INTEGER})
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
