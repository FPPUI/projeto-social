'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advogado_Responsavel', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registro_oab: {
        type: Sequelize.STRING(60),
        unique: true
      },
      nome: {
        type: Sequelize.STRING(60),
      },
      endereco: {
        type: Sequelize.STRING(100)
      },
      telefone: {
        type: Sequelize.STRING(13)
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Advogado_Responsavel');
  }
};