'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('categories', 'path', { 
      type: Sequelize.STRING,
    });   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('categories', 'path'); 
  }
};
