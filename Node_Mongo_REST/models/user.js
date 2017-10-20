star'use strict'
// Modelo usuario, para poder gestionar las autenticaciones

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// we use a library for encript user passwords
const bcrypt = require('bcrypt-nodejs')
// crear
const crypto = require('crypto')

const UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  displayName: String,
  avatar: String,
  // select: false >> por defecto para cuando un usuario haga una peticion get de usuario (login), la info de password no llegue hacia el lado del cliente
  password: {type: String, select: false},
  //indicamos que cada vez que un usuario haga login, se guarde en la db la fecha y hora en la que se conecta
  signupDate: { type: Date, default: Date.now()},
  //para que cada vez que se logee se actualiza para tener un control de acceso de usuarios
  lastLogin: Date
})

// funciones (que proporciona mongoose) que se ejecuten antes o despues de que los datos se guarden en la db

//con este esquema lo que se hace es hashear el password para no guardarlo como tal en nuestra api
//pre >> preguardado
UserSchema.pre('save', function(next) {
  let user = this
  // consultar si el usuario no a modificado su password
  if (!user.isModified('password')) return next()

  // genSalt >> generar un salto
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

//funcionalidad de AVATAR para dejar de subir archivos como (fotos de usuario) en la que solo le pasamos un email y devuelve un avatar

UserSchema.methods.gravatar = function () {
  //si no tiene un email registrado en gravatar, lo que va a ser es traer un avatar por defecto
  if(!this.email) return `https://gravatar.com/avatar/?s=200&retro`

  //crear un hash en md5, en la cual hara una consulta si es que tiene una imagen subida y que esta asociada este hash
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
