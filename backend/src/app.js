const express = require('express')
const app = express()
const router = require('./router')
const errorHandler = require('./errorHandler')

// Especifica que o mecanismo de modelo a ser utilizado é o EJS
app.set('view engine', 'ejs')
app.use(errorHandler)
app.use(router)

module.exports = app