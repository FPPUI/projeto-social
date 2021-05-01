const express = require('express')

const router = express.Router()

const advogado_responsavel = require('./controllers/AdvogadoController').default
const advogado_controller = new advogado_responsavel()

/**
 * 
 const cadastro_responsavel = require('./controllers/Cadastro_ResponsavelController').default
 const responsavel_controller = new cadastro_responsavel()
 
 const cadastro_estudantes = require('./controllers/Cadastro_EstudantesController').default
 const estudantes_controller = new cadastro_estudantes()
 
 const cadastro_juridico = require('./controllers/Cadastro_JuridicoController').default
 const juridico_controller = new cadastro_juridico()
 */
 
 
router.post('/advogado/create', advogado_controller.cadastrar)
router.put('/advogado/edit', advogado_controller.editar)
router.delete('/advogado/delete', advogado_controller.deletar)
router.get('/advogado/showall', advogado_controller.showall)
/**
 * 
 router.post('/aluno/create', estudantes_controller.cadastrar)
 router.put('/aluno/edit', estudantes_controller.editar)
 router.delete('/aluno/delete', estudantes_controller.deletar)
 router.get('/aluno/showall', estudantes_controller.showall)
 
 router.post('/responsavel/create', responsavel_controller.cadastrar)
 router.put('/responsavel/edit', responsavel_controller.editar)
 router.delete('/responsavel/delete', responsavel_controller.deletar)
 router.get('/responsavel/showall', responsavel_controller.showall)
 
 router.post('/cliente/create', juridico_controller.cadastrar)
 router.put('/cliente/edit', juridico_controller.editar)
 router.delete('/cliente/delete', juridico_controller.deletar)
 router.get('/cliente/showall', juridico_controller.showall)
 */

module.exports = router
