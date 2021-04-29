const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/database.sqlite',
    
});

module.exports = {
    sequelize: function(){
        return sequelize
    },
    dataTypes: function(){
        return DataTypes
    }
}