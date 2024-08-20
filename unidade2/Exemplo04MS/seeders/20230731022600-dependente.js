'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Dependentes', [{
      nome: 'Pedro',
      pessoaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Carlos',
      pessoaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Dependentes', null, {});
  }
};
