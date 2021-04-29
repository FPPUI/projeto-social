const dbtools = require('../database/connection')
const connection = dbtools.sequelize()
const DataTypes = dbtools.dataTypes()

const modelresponsavel = require('../database/models/cadastro_responsavel')
const responsavel = modelresponsavel(connection, DataTypes)

class Cadastro_ResponsavelController {
    async cadastrar(req, res){
        try {
            let matricula_filho = req.body.matricula_filho
            let nome = req.body.nome
            let endereco = req.body.endereco
            let telefone = req.body.telefone
            let nacionalidade = req.body.nacionalidade
            let estado = req.body.estado
            let cidade = req.body.cidade
            let nascimento = req.body.nascimento
            let trabalho_local = req.body.trabalho_local

            let cadastro = await responsavel.create({matricula_filho, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local})
            res.status(201).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async editar(req, res){
        try {
            let matricula_filho = req.body.matricula_filho
            let nome = req.body.nome
            let endereco = req.body.endereco
            let telefone = req.body.telefone
            let nacionalidade = req.body.nacionalidade
            let estado = req.body.estado
            let cidade = req.body.cidade
            let nascimento = req.body.nascimento
            let trabalho_local = req.body.trabalho_local

            let cadastro = await responsavel.update({matricula_filho, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local},{
                where:{
                    matricula_filho
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async deletar(req, res){
        try {
            let matricula_filho = req.body.matricula_filho

            let cadastro = await responsavel.destroy({
                where:{
                    matricula_filho
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async showall(req, res){
        try{
            const cadastros = await responsavel.findAll()

            res.status(200).json({cadastros})
        } catch (error) {
            logs.error(error)
        }
    }

}

exports.default = Cadastro_ResponsavelController;