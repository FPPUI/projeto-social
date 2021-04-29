'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cadastro_Responsavels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula_filho: {
        type: Sequelize.STRING(25),
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
      nacionalidade: {
        type: Sequelize.STRING(30)
      },
      estado: {
        type: Sequelize.STRING(30)
      },
      cidade: {
        type: Sequelize.STRING(150)
      },
      nascimento: {
        type: Sequelize.DATE
      },
      trabalho_local: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('Cadastro_Responsavels');
  }
};