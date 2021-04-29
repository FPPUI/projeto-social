const dbtools = require('../database/connection')
const connection = dbtools.sequelize()
const DataTypes = dbtools.dataTypes()

const modeljuridico = require('../database/models/cadastro_juridico')
const juridico = modeljuridico(connection, DataTypes)

class Cadastro_JuridicoController {
    async cadastrar(req, res){
        try {
            let oab_advogado = req.body.oab_advogado
            let nome = req.body.nome
            let endereco = req.body.endereco
            let cpf = req.body.cpf
            let rg = req.body.cidade
            let telefone = req.body.telefone
            let numero_processo = req.body.numero_processo
            let vara_criminal = req.body.vara_criminal
            let data_acusacao = req.body.data_acusacao
            let informacoes_adicionais = req.body.informacoes_adicionais

            let cadastro = await juridico.create({oab_advogado, nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais})
            res.status(201).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async editar(req, res){
        try {
            let oab_advogado = req.body.oab_advogado
            let nome = req.body.nome
            let endereco = req.body.endereco
            let cpf = req.body.cpf
            let rg = req.body.cidade
            let telefone = req.body.telefone
            let numero_processo = req.body.numero_processo
            let vara_criminal = req.body.vara_criminal
            let data_acusacao = req.body.data_acusacao
            let informacoes_adicionais = req.body.informacoes_adicionais

            let cadastro = await juridico.update({nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais},{
                where:{
                    oab_advogado
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async deletar(req, res){
        try {
            let oab_advogado = req.body.oab_advogado

            let cadastro = await juridico.destroy({
                where:{
                    oab_advogado
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async showall(req, res){
        try{
            const cadastros = await juridico.findAll()

            res.status(200).json({cadastros})
        } catch (error) {
            logs.error(error)
        }
    }

}

exports.default = Cadastro_JuridicoController;