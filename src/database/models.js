const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/database.db'
});

   
const Aluno = sequelize.define('Aluno', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false } ,
  matricula: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },   
  endereco: { type: DataTypes.STRING, allowNull: false },   
  telefone: { type: DataTypes.STRING, allowNull: false },   
  nacionalidade: { type: DataTypes.STRING, allowNull: false },   
  estado: { type: DataTypes.STRING, allowNull: false },   
  cidade: { type: DataTypes.STRING, allowNull: false },   
  aniversario: { type: DataTypes.DATE, allowNull: false },   
  sexo: { type: DataTypes.STRING, allowNull: false },
  
});

const Responsavel = sequelize.define('Responsavel', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false } ,
  matricula_filho: { type: DataTypes.STRING, allowNull: false },
  nome_filho: { type: DataTypes.STRING, allowNull: false },
  nome: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  nacionalidade: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  cidade: { type: DataTypes.STRING, allowNull: false },
  aniversario:{ type: DataTypes.STRING, allowNull: false },
  trabalho_local:  {type: DataTypes.STRING, allowNull: false},

}, {tableName: 'Responsaveis'})

const Cliente = sequelize.define('Cliente', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false } ,
  nome: {type: DataTypes.STRING, allowNull: false},
  endereco: {type: DataTypes.STRING, allowNull: false},
  cpf: {type: DataTypes.STRING, allowNull: false},
  telefone: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, allowNull: false},
  numero_processo: {type: DataTypes.STRING, allowNull: false},
  vara: {type: DataTypes.STRING, allowNull: false},
  data: {type: DataTypes.DATE, allowNull: false},
  oab_advogado: {type: DataTypes.STRING, allowNull: false},
})

const Advogado = sequelize.define('Advogado', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false } ,
  nome: { type: DataTypes.STRING, allowNull: false },
  escritorio: { type: DataTypes.STRING, allowNull: false },
  oab: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
})


async function create_table_alunos() { await Aluno.sync({ alter: true }); }
async function create_table_responsavel() { await Responsavel.sync({ alter: true }); }
async function create_table_cliente() { await Cliente.sync({ alter: true }); }
async function create_table_advogado() { await Advogado.sync({ alter: true });}

async function drop_table_alunos() { await Aluno.drop() }
async function drop_table_responsavel() { await Responsavel.drop() }
async function drop_table_cliente() { await Cliente.drop()}
async function drop_table_advogado() { await Advogado.drop()}

//create_table_alunos()
//create_table_responsavel()
//create_table_cliente()
//create_table_advogado()

module.exports = {
   Cliente,
   Advogado,
   Aluno,
   Responsavel
}