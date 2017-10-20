
//before auth.js
//Este es un controlador que va a estar asociada a toda la logica de los usuarios
// este controlador se va encargar del registro y autentificacion de nuestra api rest
'use strict'

const User = require('../models/user')
const service = require('../services')

//funcion para el registro (creacion de usuarios)
function signUp (req, res) {
  const user = new User({
    //aqui no se declara
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
    //isgnupDate ya esta por defecto
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    //en el caso de no error >> service.createToken() >> recibe el objto usuario creado para crear su correspondiente token
    return res.status(200).send({token: service.createToken(user)})
    // los servicios en nodejs son funciones que nos ayudan a ejecutar determinadas acciones para no repetir codigo porque van a ser reautilizadas constantemente
  })
}

// funcion para el inicio de sesion
function signIn (req, res) {
  //buscar en la base de datos el email que mandaremos en la peticion >> si existe le daremos acceso, creando un token que viajaran en la cabeceras (headers) en cada peticion desde la db
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })

    if (!user) return res.status(404).send({ message: 'No exite el usuario' })

    // pasa ha esta fase si no hay errorde peticion y si es que se encontro usuario
    // mandamos esta respuesta 200 incluido el token
    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user)
    })


  })



}

module.exports = {
  signUp : signUp,
  signIn : signIn
}
