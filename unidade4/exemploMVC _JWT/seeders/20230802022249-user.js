'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10, 'a');
    const senhaCripto = await bcrypt.hash('admin123', salt); 
    await queryInterface.bulkInsert('Users', [{
         nome: 'Administrador do Sistema',
         login: 'root',
         senha: senhaCripto,
         createdAt: new Date(),
         updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
