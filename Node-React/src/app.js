import React from 'react'
import ReactDom from 'react-dom'
import Componente1 from './js/components/App.js'

var props = window.PROPS

ReactDom.render(
  //this two form to recive props from server is a valid, but to use props in each type to render props of the Componente 1 is slightly diferent
  // check in component 1
  React.createElement(Componente1, props),
  // <Componente1 serverTitle={props} />,
  document.getElementById('app')
)
