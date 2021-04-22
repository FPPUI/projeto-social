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
      Matricula_Filho: {
        type: Sequelize.STRING(25),
        unique: true
      },
      Nome_Filho: {
        type: Sequelize.STRING(60),
      },
      Nome_Responsavel: {
        type: Sequelize.STRING(60),
      },
      Endereco: {
        type: Sequelize.STRING(100)
      },
      Telefone: {
        type: Sequelize.STRING(13)
      },
      Nacionalidade: {
        type: Sequelize.STRING(30)
      },
      Estado: {
        type: Sequelize.STRING(30)
      },
      Cidade: {
        type: Sequelize.STRING(150)
      },
      Nascimento: {
        type: Sequelize.DATE
      },
      Trabalho_Local: {
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