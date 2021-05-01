const {connection, DataTypes} = require('../database/connection')
const Advogado = require('../database/models/advogado')(connection, DataTypes)

class AdvogadoController {
    async cadastrar(req, res){
        const {registro_oab, nome, endereco, telefone, email} = req.body
        console.log('Pegando dados do body');
        try {

            const cadastro = await Advogado.create({registro_oab, nome, endereco, telefone, email})
            console.log('cadastro');
            res.status(201).json({cadastro})

        } catch (error) {
            console.log('erro');
            
            res.send(nome)
        }
    }

    async editar(req, res){
        try {
            
            const {id} = req.params
            const {registro_oab, nome, endereco, telefone, email} = req.body

            const cadastro = await Advogado.update({nome, registro_oab,endereco, telefone, email}, {
                where:{
                    id
                }})
                
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async deletar(req, res){
        try {

            const {id} = req.params

            const cadastro = await Advogado.destroy({
                where:{
                    id
                }})
            res.status(200).json({cadastro})

        } catch (error) {
            logs.error(error)
        }
    }

    async index(req, res){
        const {nome, registro_oab, endereco, telefone, email} = req.body
        const cadastro = await Advogado.findOne({
            where: {
                nome
            }
        })

    }

    async showall(req, res){
        try{
            const cadastros = await Advogado.findAll()

            res.status(200).json({cadastros})
        } catch (error) {
            logs.error(error)
        }
    }

}

exports.default = AdvogadoController