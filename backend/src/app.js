const express = require('express')
const app = express()
const router = require('./router')

// Especifica que o mecanismo de modelo a ser utilizado é o EJS
app.set('view engine', 'ejs')
app.use(router)

module.exports = app