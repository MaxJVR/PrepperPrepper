'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
  'city_infos',
  'suggested_gallons',
  Sequelize.INTEGER
)
    return queryInterface.addColumn(
  'city_infos',
  'suggested_guns',
  Sequelize.INTEGER
)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      return queryInterface.removeColumn(
  'city_infos',
  'suggested_gallons'
)
      return queryInterface.removeColumn(
  'city_infos',
  'suggested_guns'
)
  }
};