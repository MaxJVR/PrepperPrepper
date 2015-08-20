'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return [
      queryInterface.addColumn(
        'users',
        'gallons',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'users',
        'meals',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'users',
        'guns',
        Sequelize.INTEGER
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {

    // return [
    //   queryInterface.dropColumn(
    //     'users',
    //     'gallons',
    //     Sequelize.INTEGER
    //   ),
    //   queryInterface.dropColumn(
    //     'users',
    //     'meals',
    //     Sequelize.INTEGER
    //   ),
    //   queryInterface.dropColumn(
    //     'users',
    //     'guns',
    //     Sequelize.INTEGER
    //   ),
    // ];
  }
};
