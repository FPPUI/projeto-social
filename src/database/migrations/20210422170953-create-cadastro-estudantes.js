'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cadastro_Estudantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Matricula: {
        type: Sequelize.STRING(25),
        unique: true
      },
      Nome: {
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
      Sexo: {
        type: Sequelize.STRING(9)
      },
      Obs: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('Cadastro_Estudantes');
  }
};