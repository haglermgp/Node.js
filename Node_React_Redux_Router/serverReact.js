import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Template from './template'
import App from './App'

export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res, next) => {
    const context = {}
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={ req.url } context={ context }>
        <App />
      </StaticRouter>
    )
    const helmet = Helmet.renderStatic()

    res.status(200).send(Template({
      markup: markup,
      helmet: helmet,
    }))
  }
}

//Rendering on the server is a bit different because it's all statless. Hence we'll use <StaticRouter> instead of a <BrowserRouter> and pass the requested url to it within the context object

// CONTEXT
// In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful “context” API

//HELMET
//we also need to edit our server.jsx file and call Helme.renderStatic() after ReactDOMServer.renderToString to be able to use the head data in our prerenderj
