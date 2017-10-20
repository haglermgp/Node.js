'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0},
  //numeracion de manera que sera de un determinado campo que emos definido y evitar que se almacene otras categorias que no las hemos definido
  category: { type: String, enum: ['computers', 'phones', 'accesories'] },
  description: String
})

// .model for export our model
module.exports = mongoose.model('Product', ProductSchema)
