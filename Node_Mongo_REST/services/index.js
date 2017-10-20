// los servicios en nodejs son funciones que nos ayudan a ejecutar determinadas acciones para no repetir codigo porque van a ser reautilizadas constantemente
'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken (user) {
  // el payload contiene los datos que se enviaran los datos al servidor para que lo descifre y haga la autenticaion
  const payload = {
    //sub >> corresponde a un Id >> con el que vamos a identificar en el servidor que usuario es, (no es el id del usuario que se guarda en mongodb, ques es el privado)
    //este id es el id publico (que viajara en la peticion post)
    sub: user._id,
    //moment().unix() nos dara el dia corriente y de formato unix
    iat: moment().unix(),
    // expire >> indicamos la cantidad de tiemo que caducara el token
    exp: moment().add(14, 'days').unix()
  }

  //codificamos el payload con la libreria de jwt
  return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token) {
  //>> esta promesa va a recoger el token ya creado y lo decodificarad
  // resolve >> cuando ya se ha resuelto la promesa que tuvimos que llamar
  // reject >> cuando la promesa no se a logrado resolver y de error
  // Promise decimos que se resuelve cuando trae algun valor valido, si tra err si
  const decoded = new Promise((resolve, reject) => {
    // try catch >>
    try {
      //decodifica
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      //comprueba si ha expirado
      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }

      //si el token tiene luz verde
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token Services'
      })
      //reject manda este objerro cuando se obtena herror
    }
  })
  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
