//file de autentificacion
'use strict'

// const jwt = require('jwt-simple')
// const momen = require('moment')
// const config = require('../config')
const services = require('../services')

function isAuth (req, res, next) {
  //comprueba si existe autorizacion
  if (!req.headers.authorization) {
    return res.status(403).send({message: 'No tienes authorization'})
  }

  //en caso de que exista, tomara el token y lo decodificara
  const token = req.headers.authorization.split(" ")[1]

  // const payload = jwt.decode(token, config.SECRET_TOKEN)
    // //una vez obtenido el token verificara si ha expirado
    // if (payload.exp <= moment().unix()) {
    //   return res.status(401).send({ message: 'El token ha expirado'})
    // }
    // //en el caso de ue no haya caducado, autoriza, he indica que el usuario tiene el payload
    // req.user = payload.sub
    // next()

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = {isAuth}

//como aniadimos este middleware a nuestras rutas ?  >> lo definimos en nuestras rutas
