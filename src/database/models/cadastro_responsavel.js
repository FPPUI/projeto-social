'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastro_Responsavel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cadastro_Responsavel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Matricula_Filho: {
      type: DataTypes.STRING(25),
      unique: true
    },
    Nome_Filho: {
      type: DataTypes.STRING(60),
    },
    Nome_Responsavel: {
      type: DataTypes.STRING(60),
    },
    Endereco: {
      type: DataTypes.STRING(100)
    },
    Telefone: {
      type: DataTypes.STRING(13)
    },
    Nacionalidade: {
      type: DataTypes.STRING(30)
    },
    Estado: {
      type: DataTypes.STRING(30)
    },
    Cidade: {
      type: DataTypes.STRING(150)
    },
    Nascimento: {
      type: DataTypes.DATE
    },
    Trabalho_Local: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'Cadastro_Responsavel',
  });
  return Cadastro_Responsavel;
};