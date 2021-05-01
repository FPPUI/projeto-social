'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Advogado extends Model {
    static associate(models) {

    }
  };
  Advogado.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    registro_oab: {
      type: DataTypes.STRING(60),
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
    email: {
      type: DataTypes.STRING(100),
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Advogado',
  });
  return Advogado;
};