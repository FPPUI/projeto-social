const express = require('express')

const router = require('./routes')

const app = express()

require('dotenv/config');

app.use(express.json())
app.use('/', router)


const port = process.env.NODE_PORT || 3000
app.listen(port, console.log(`Working in port ${port}`))