'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// we use a library for encript user passwords
const bcrypt = require('bcrypt-nodejs ')
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

// funciones que se ejecuten antes o despues de que los datos se guarden en la db

UserSchema.pre('save', (next) => {
  let user = this
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

//funcionalidad de AVATAR para dejar de subir archivos como (fotos de usuario) en la que solo le pasamos un email y devuelve un avatar

UserSchema.methods.gravatar = function () {
  if(!this.email) return `https://gravatar.com/avatar/?s=200&retro`

  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
