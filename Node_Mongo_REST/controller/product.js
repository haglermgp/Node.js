'use strict'
//modules
const Product = require('../models/product')

function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}`})
    if (!product) return res.status(404).send({ message: `El producto no existe`})

    // res.status(200).send({ product: product})
    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  // find({}, >>> indica que buscara todos los grupos de datos que se hayan guardado
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send( { message: `Error al realizar la peticion: ${err}`})
    if (!products) return res.status(404).send( { msesage: 'No existen productos'})

    res.status(200).send( { products } )
  })
}

function saveProduct (req, res) {
  console.log('POST /api/product');
  // req.body para saber que es lo que llega cuando ocurre errores
  console.log(req.body);

  //defimos los campos en la peticion POTS almacenar nuestro producto
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  // una vez que se almacene se asigna automaticamente un id unico
  product.save((err, productStored) => {
    if (err) {
      res.status(500).send({message: `Error al salvar en la base de dato: ${err}`})
    }else {
      res.status(200).send({product: productStored})
    }
  })
}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({ prouct: productUpdated })
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, productSelect) => {
    if (err) return res.status(500).send({message: `Error al borrar el producto: ${err}`})

    productSelect.remove( err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({ message: 'El producto a sido eliminado' })
    })
  })
}

module.exports = {
  getProduct : getProduct,
  getProducts : getProducts,
  updateProduct : updateProduct,
  deleteProduct : deleteProduct,
  saveProduct : saveProduct
}
