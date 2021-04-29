'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cadastro_Juridicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oab_advogado: {
        type: Sequelize.STRING(60),
        unique: true,
        references: {
          model: {
            tableName: 'advogado_responsavel'
          },
          key: 'registro_oab'
        },
      },
      nome: {
        type: Sequelize.STRING(60),
      },
      endereco: {
        type: Sequelize.STRING(100)
      },
      cpf: {
        type: Sequelize.STRING(11)
      },
      rg: {
        type: Sequelize.STRING(9)
      },
      telefone: {
        type: Sequelize.STRING(13)
      },
      numero_processo: {
        type: Sequelize.STRING(20)
      },
      vara_criminal: {
        type: Sequelize.STRING(40)
      },
      data_acusacao: {
        type: Sequelize.DATE
      },
      informacoes_adicionais: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Cadastro_Juridicos');
  }
};