'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastro_Juridico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cadastro_Juridico.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    oab_advogado: {
      type: DataTypes.STRING(60),
      unique: true,
      references: {
        model: {
          tableName: 'advogado_responsavel'
        },
        key: 'registro_oab'
      },
    },
    nome: {
      type: DataTypes.STRING(60),
    },
    endereco: {
      type: DataTypes.STRING(100)
    },
    cpf: {
      type: DataTypes.STRING(11)
    },
    rg: {
      type: DataTypes.STRING(9)
    },
    telefone: {
      type: DataTypes.STRING(13)
    },
    numero_processo: {
      type: DataTypes.STRING(20)
    },
    vara_criminal: {
      type: DataTypes.STRING(40)
    },
    data_acusacao: {
      type: DataTypes.DATE
    },
    informacoes_adicionais: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Cadastro_Juridico',
  });
  return Cadastro_Juridico;
};