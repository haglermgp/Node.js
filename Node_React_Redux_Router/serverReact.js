import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { Helmet } from 'react-helmet'

// our file thar use
import Template from './template'
import routes from './App'
// import routes from '../client/routes'

export default function serverRenderer({ clientStats, serverStats }) {
  console.log('clientStas', clientStats)
  // console.log('serverStats', serverStats)
  return (req, res, next) => {
    const branch = matchRoutes(routes, req.url)
    const promises = branch.map(({route}) => {
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
    })

    return 

    const context = {}
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={ req.url } context={ context }>
        {/*<App />*/}
        {renderRoutes(routes)}
      </StaticRouter>
    )
    const helmet = Helmet.renderStatic()
    if (context.url) {
      // Somewhere a '<Redirect>' was rendered
      res.writeHead(301, {
        Location: context.url
      })
      res.end()
      // res.redirect(context.status, context.url)
    } else {
      // We're good send the response
      
      res.status(200).send(Template({
        markup: markup,
        helmet: helmet,
      }))

      res.end()
    }
  }
}

//Rendering on the server is a bit different because it's all statless. Hence we'll use <StaticRouter> instead of a <BrowserRouter> and pass the requested url to it within the context object

// CONTEXT
// In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful “context” API

//HELMET
//we also need to edit our server.jsx file and call Helme.renderStatic() after ReactDOMServer.renderToString to be able to use the head data in our prerenderj
