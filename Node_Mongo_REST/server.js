//place that we define all functionallity of connection to data base and all info of the express configuration
'use strict'

const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Ha ocurrido un error en la coneccion: ${err}`);
  }
  console.log('Coneccion a la base de datos establecida..');

  //una vez conectada a la base de datos, se empieza a escuchar nuestro servidor de express
  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`);
  })
})
