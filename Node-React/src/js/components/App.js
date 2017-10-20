import React, { Component } from 'react'

class Componente1 extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('it works!');
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {/* when render props from server like this >>  <Componente1 serverTitle={props} /> */}
          {/* {this.props.serverTitle.title} */}

        {/* when render like this >>  React.createElement(Componente1, props), */}
        {this.props.title}
        <h2>Hello World!</h2>
        <p>Isn't server-side rendering remarkable?</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

module.exports = Componente1
