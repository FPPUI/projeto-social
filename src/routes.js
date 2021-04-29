const express = require('express')

const router = express.Router()

const cadastro_estudantes = require('./controllers/Cadastro_EstudantesController').default
const estudantes_controller = new cadastro_estudantes()

const cadastro_responsavel = require('./controllers/Cadastro_ResponsavelController').default
const responsavel_controller = new cadastro_responsavel()

const advogado_responsavel = require('./controllers/Advogado_ResponsavelController').default
const advogado_controller = new advogado_responsavel()

const cadastro_juridico = require('./controllers/Cadastro_JuridicoController').default
const juridico_controller = new cadastro_juridico()


router.get('/', (req, res) => {
    
})

router.post('/cadastro_estudantes/cadastrar', estudantes_controller.cadastrar)
router.put('/cadastro_estudantes/editar', estudantes_controller.editar)
router.delete('/cadastro_estudantes/deletar', estudantes_controller.deletar)
router.get('/cadastro_estudantes/showall', estudantes_controller.showall)

router.post('/cadastro_responsavel/cadastrar', responsavel_controller.cadastrar)
router.put('/cadastro_responsavel/editar', responsavel_controller.editar)
router.delete('/cadastro_responsavel/deletar', responsavel_controller.deletar)
router.get('/cadastro_responsavel/showall', responsavel_controller.showall)

router.post('/advogado_controller/cadastrar', advogado_controller.cadastrar)
router.put('/advogado_controller/editar', advogado_controller.editar)
router.delete('/advogado_controller/deletar', advogado_controller.deletar)
router.get('/advogado_controller/showall', advogado_controller.showall)

router.post('/juridico_controller/cadastrar', juridico_controller.cadastrar)
router.put('/juridico_controller/editar', juridico_controller.editar)
router.delete('/juridico_controller/deletar', juridico_controller.deletar)
router.get('/juridico_controller/showall', juridico_controller.showall)

module.exports = router
