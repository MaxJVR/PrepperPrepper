'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'city_infos',
        'suggested_gallons',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'city_infos',
        'suggested_guns',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'city_infos',
        'suggested_meals',
        Sequelize.INTEGER
      )
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
