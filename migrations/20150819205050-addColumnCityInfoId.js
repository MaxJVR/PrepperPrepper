'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return [
      queryInterface.addColumn(
        'users',
        'cityInfoId',
        Sequelize.INTEGER
      )]
  },

  down: function (queryInterface, Sequelize) {
    return [
    queryInterface.removeColumn(
      'users',
      'cityInfoId'
      )]
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
