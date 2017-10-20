'use strict'
import React, { Component } from 'react'

class Component_react extends Component {
  render() {
    return(
      <html>
        <head>
            <title>{this.props.title}</title>
            {/* <link rel='stylesheet' href='/style.css' /> */}
        </head>
        <body>
          <div id='app'></div>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
          <script src='/bundle.js' />
        </body>
      </html>
    )
  } }

module.exports = Component_react
