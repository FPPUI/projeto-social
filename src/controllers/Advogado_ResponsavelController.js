const dbtools = require('../database/connection')
const connection = dbtools.sequelize()
const DataTypes = dbtools.dataTypes()

const modelresponsavel = require('../database/models/advogado_responsavel')
const responsavel = modelresponsavel(connection, DataTypes)

class Advogado_ResponsavelController {
    async cadastrar(req, res){
        try {
            let registro_oab = req.body.registro_oab
            let nome = req.body.nome
            let endereco = req.body.endereco
            let telefone = req.body.telefone
            let nacionalidade = req.body.nacionalidade
            let estado = req.body.estado
            let cidade = req.body.cidade
            let nascimento = req.body.nascimento
            let sexo = req.body.sexo
            let obs = req.body.obs

            let cadastro = await estudantes.create({matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs})
            res.status(201).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async editar(req, res){
        try {
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

            let cadastro = await estudantes.update({nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs},
                {where:{
                    matricula
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async deletar(req, res){
        try {
            let matricula = req.body.matricula

            let cadastro = await estudantes.destroy({
                where:{
                    matricula
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async showall(req, res){
        try{
            const cadastros = await estudantes.findAll()

            res.status(200).json({cadastros})
        } catch (error) {
            logs.error(error)
        }
    }

}

exports.default = Advogado_ResponsavelController;