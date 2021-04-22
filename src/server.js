const express = require('express')

const router = require('./routes')

const app = express()

require('dotenv').config();

app.use('/', router)
app.use(express.json())

app.listen(process.env.NODE_PORT, console.log(`Working in port ${process.env.NODE_PORT}`))