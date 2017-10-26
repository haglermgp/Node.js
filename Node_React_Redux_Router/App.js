import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import style from './homepage.sass'

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
  <div className={style.component}>
    <Helmet
      title='welcome to our Homepage'
    />
    <Menu/>
    <h1>Homepage</h1>
  </div>
)

const About = () => (
  <div>
    <Menu/>
    <h1>About</h1>
  </div>
)

const Contact = () => (
  <div>
    <Menu/>
    <h1>Contact</h1>
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
          htmlAttributes={{'lang': 'en', 'amp': ''}}
          titleTemplate='%s | React App'
          titleAttributes={{itemprop: 'name', lang: 'en'}}
          meta={[
            {name: 'description', content: 'Server side rendering example'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
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
