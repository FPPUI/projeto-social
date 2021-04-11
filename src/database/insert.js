const {Cliente: Client, Advogado: Lawer, Aluno: Student, Responsavel: Responsible} = require('./models')


const Insert = {

    adv: function(nome, escritorio, oab, telefone, email){
        const advogado = Lawer.build({ nome: nome, escritorio: escritorio, oab: oab, telefone: telefone, email: email })
        advogado.save()
        return advogado.toJSON()
    }
}

module.exports = Insert