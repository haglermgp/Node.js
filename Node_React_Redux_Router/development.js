const express = require('express')
const path = require('path')
const app = express()

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const config = require('./webpack.development.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/static/'
}))

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')))
app.use(webpackHotServerMiddleware(compiler))

app.listen(3000)

//DEVELOPMENT SERVER
// Our development server will be an express application. To have it running we need webpack-dev-middleware initialised with our development config together with webpack-hot-middleware and webpack-hot-server-middleware. These two middlewaeres implement hot update of the bundles both  on client and server
