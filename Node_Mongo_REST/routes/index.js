'use strict'
const express = require('express')

//controllers
const ProductCtrl = require('../controller/product')

const api = express.Router()

//devuelve un resultado de todos los productos
api.get('/product', ProductCtrl.getProducts)
//devuelve un resultado por producto
api.get('/product/:productId', ProductCtrl.getProduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.updateProduct)

api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api
