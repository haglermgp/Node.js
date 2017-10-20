//place that we define all functionallity and configuration off of express
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//Routes
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)



module.exports = app
