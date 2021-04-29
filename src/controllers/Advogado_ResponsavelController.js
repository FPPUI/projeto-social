const dbtools = require('../database/connection')
const connection = dbtools.sequelize()
const DataTypes = dbtools.dataTypes()

const modeladvogado = require('../database/models/advogado_responsavel')
const advogado = modeladvogado(connection, DataTypes)

class Advogado_ResponsavelController {
    async cadastrar(req, res){
        try {
            let registro_oab = req.body.registro_oab
            let nome = req.body.nome
            let endereco = req.body.endereco
            let telefone = req.body.telefone
            let email = req.body.email

            let cadastro = await advogado.create({registro_oab, nome, endereco, telefone, email})
            res.status(201).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async editar(req, res){
        try {
            let registro_oab = req.body.registro_oab
            let nome = req.body.nome
            let endereco = req.body.endereco
            let telefone = req.body.telefone
            let email = req.body.email

            let cadastro = await advogado.update({nome, endereco, telefone, email}, {
                where:{
                    registro_oab
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async deletar(req, res){
        try {
            let registro_oab = req.body.registro_oab

            let cadastro = await advogado.destroy({
                where:{
                    registro_oab
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async showall(req, res){
        try{
            const cadastros = await advogado.findAll()

            res.status(200).json({cadastros})
        } catch (error) {
            logs.error(error)
        }
    }

}

exports.default = Advogado_ResponsavelController;