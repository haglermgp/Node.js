import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { createStore, applMyiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// import routes from './routes'
import routes from './App'
import reducers from './modules'

const store = createStore(
	reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
)

// NOTE: Calling ReactDOM.render() to hydrate server-rendered markup will stop working in react v17. Replace the ReactDom.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML
// ReactDOM.render(
ReactDOM.hydrate(
  (
  <Provider store={ store } >
	  <BrowserRouter>
	    {renderRoutes(routes)}
	  </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
)

// Since we will have server handling dynamic requests well be using <BrowserRouter> as out client router component
