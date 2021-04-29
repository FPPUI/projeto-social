'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advogado_Responsavel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Advogado_Responsavel.init({
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
    modelName: 'Advogado_Responsavel',
  });
  return Advogado_Responsavel;
};