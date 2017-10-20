
'use strict'
require('babel-register')({
  presets: ['react']
})

const express = require('express')
const app = express()

const React = require('react')
const ReactDOMServer = require('react-dom/server')

//import file for render from our server
const Component_react = require('./src/js/index.js')


app.get('/', (req, res) => {
  var props = {title: 'start-mern from server side'}
  //react al momento de exportar el component lo hace como un string
  var html = ReactDOMServer.renderToString(
    React.createElement(Component_react, props)
  )
  res.send(html)
})

app.use(express.static('./src/js/routes/index.js'))

var PORT = 3000
app.listen(PORT, function () {
  console.log('Server on port ' + PORT);
})
