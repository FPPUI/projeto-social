const express = require('express')

const router = express.Router()

const dbtools = require('./database/connection.js')
const connection = dbtools.sequelize()
const dataTypes = dbtools.dataTypes()

const estudantes = (require('./database/models/cadastro_estudantes'))(connection, dataTypes)

router.get('/', (req, res) => {
    
})

router.post('/cadastro_estudantes/create', (req, res) => {
    let matricula = req.body.matricula
    let nome = req.body.nome
    let endereco = req.body.endereco
    let telefone = req.body.telefone
    let nacionalidade = req.body.nacionalidade
    let estado = req.body.estado
    let cidade = req.body.cidade
    let nascimento = req.body.nascimento
    let sexo = req.body.sexo
    let obs = req.body.obs
    console.log(req.body.matricula)
    console.log(req.body)
    //req.body.
    estudantes.create({matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs})
})

module.exports = router
