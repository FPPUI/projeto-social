'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastro_Estudantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cadastro_Estudantes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Matricula: {
      type: DataTypes.STRING(25),
      unique: true
    },
    Nome: {
      type: DataTypes.STRING(60)
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
    Sexo: {
      type: DataTypes.STRING(9)
    },
    Obs: {
      type: DataTypes.STRING(255),
    },
  }, {
    sequelize,
    modelName: 'Cadastro_Estudantes',
  });
  return Cadastro_Estudantes;
};