import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to={'/'}>Homepage</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
  </div>
)

const Homepage = () => (
  <div>
    <Helmet
      title='welcome to our Homepage'
    />
    <Menu/>
    <h1>Homepage</h1>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
    <Menu/>
  </div>
)

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Menu/>
  </div>
)

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}}
          titleTemplate='%s | React App'
          titleAttributes={{itemprop: 'name', lang: 'en'}}
          meta={[
            {name: 'description', content: 'Server side rendering example'},
            {name: 'viewport', content: 'width=devise-width, initial-scale=1'}
          ]}
        />
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
        </Switch>
      </div>
    )
  }
}
