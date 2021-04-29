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
    matricula_filho: {
      type: DataTypes.STRING(25),
      unique: true
    },
    nome: {
      type: DataTypes.STRING(60),
    },
    endereco: {
      type: DataTypes.STRING(100)
    },
    telefone: {
      type: DataTypes.STRING(13)
    },
    nacionalidade: {
      type: DataTypes.STRING(30)
    },
    estado: {
      type: DataTypes.STRING(30)
    },
    cidade: {
      type: DataTypes.STRING(150)
    },
    nascimento: {
      type: DataTypes.DATE
    },
    trabalho_local: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'Cadastro_Responsavel',
  });
  return Cadastro_Responsavel;
};