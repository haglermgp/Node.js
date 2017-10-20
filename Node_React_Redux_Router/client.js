import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
)

// Since we will have server handling dynamic requests well be using <BrowserRouter> as out client router component
