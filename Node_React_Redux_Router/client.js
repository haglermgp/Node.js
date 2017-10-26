import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// NOTE: Calling ReactDOM.render() to hydrate server-rendered markup will stop working in react v17. Replace the ReactDom.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML
// ReactDOM.render(
ReactDOM.hydrate(
  (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
)

// Since we will have server handling dynamic requests well be using <BrowserRouter> as out client router component
