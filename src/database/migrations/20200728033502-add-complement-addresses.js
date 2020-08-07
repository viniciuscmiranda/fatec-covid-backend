'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'addresses',
      'complement',
      {
        type: Sequelize.STRING
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'addresses',
      'complement',
    )
  }
};
