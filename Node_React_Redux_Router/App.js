import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
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



class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      v_response: '',
      e_handle: ''
    }

    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse(e) {
    this.setState({
      v_response: e.target.value
    })
  }

  render() {

    console.log(this.state.e_handle)
    return (
      <div className={style.component}>
        <Helmet
          title='welcome to our Homepage'
        />
        <Menu/>
        <h1>Homepage</h1>

        <input type='text' value={this.state.v_response} onChange={ (e) => this.handleResponse(e)} />
      </div>
    )
  }
}


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
const Courses = () => (
  <div>
    <Menu/>
    <h1>Courses</h1>
  </div>
)


const RedirectWithStatus = ({ from, to, status}) => (
  <Route render={({ staticContext }) => {
    // therre is no 'staticContext' on the client, so 
    // we need to guard against that here

    if (staticContext)
      staticContext.status = status

    return <Redirect from={ from } to={to} />
  }}/>
)

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
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
          <Route exact path='/curses' component={ Courses } />
          <Route component={NotFound}/>

          <RedirectWithStatus 
            status={301}
            from='/layout'
            to='/'
          />
          
          <RedirectWithStatus 
            status={302}
            from='/you'
            to='/contact'
          />
        </Switch>
      </div>
    )
  }
}
