const express = require('express')

const router = express.Router()

const Insert = require('./database/insert.js')

router.get('/', (request, response) => {
    var x = Insert.adv('Lucio', 'Castelão', '8010012', '988884444', 'lucio@email.com')
    response.send(x)
})

module.exports = router
