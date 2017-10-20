'use strict'
const express = require('express')

//controllers
const productCtrl = require('../controller/product')
const userCtrl = require('../controller/user')
const auth = require('../middlewares/auth')
const api = express.Router()

//devuelve un resultado de todos los productos
api.get('/product', productCtrl.getProducts)

api.post('/product', productCtrl.saveProduct)

//devuelve un resultado por producto
api.get('/product/:productId', productCtrl.getProduct)

api.put('/product/:productId', productCtrl.updateProduct)

api.delete('/product/:productId', productCtrl.deleteProduct)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth.isAuth, function (req, res) {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api
