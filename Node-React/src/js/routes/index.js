var router = require('express').Router()
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var ReactRouter = require('react-router')
const Component_react = require('../index.js')


router.get('*', function (req, res) {
  var props = { title: 'new routes start-mern' }
  ReactRouter.match({
    routes: (
      <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path='/' component={require('../index.js')}>

        </ReactRouter.Route>
      </ReactRouter.Router>
    ),
    location: req.url
  }, function (err, redirectLocation, renderProps) {
      if (renderProps) {
        var html = ReactDOMServer.renderToString(
          <StaticRouter location={}
          <ReactRouter.RouterContext {...renderProps} />
        )

        res.send(html)
      } else {
        response.status(404).send('Not Found')
      }

      if (err) return res.status(500).send('Server Internal Error')

      if (redirectLocation) {
        response.redirect(302,
          redirectLocation.pathname + redirectLocation.search
        )
      }
    }
  )

  //react al momento de exportar el component lo hace como un
  // var html = ReactDOMServer.renderToString(
  //   React.createElement(Component_react,props)
  // )

  res.send(html)
})

modules.exports = router
