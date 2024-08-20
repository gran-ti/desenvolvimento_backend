'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pessoas', [{
      nome: 'John',
      sobrenome: 'Doe',
      telefone: '21-21212121',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
