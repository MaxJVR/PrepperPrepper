'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return [
        queryInterface.changeColumn(
          'city_infos',
          'flood_info',
          {type: Sequelize.TEXT}
        ),
        queryInterface.changeColumn(
          'city_infos',
          'earthquake_info',
          {type: Sequelize.TEXT}
        ),
        queryInterface.changeColumn(
          'city_infos',
          'marauder_info',
          {type: Sequelize.TEXT}
        ),
      ];
  },


      /*return queryInterface.changeColumn(
        'PrepperPrepper',{
          flood_info:{
            type: Sequelize.TEXT
          },
          earthquake_info:{
            type: Sequelize.TEXT
          },
          marauder_info:{
            type: Sequelize.TEXT
          }
        }*/


  down: function (queryInterface, Sequelize) {
    // no need...
  }
};
