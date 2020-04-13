import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'

const famille = {
  membre1: {
    nom: 'Bobby',
    age: 4
  },
  membre2: {
    nom: 'Bubbu',
    age: 5
  },
  membre3: {
    nom: 'Bobbo',
    age: 6
  }
}


class App extends Component {
  state = {
    famille
  }

  handleClick = () => {
    const famille = { ... this.state.famille}
    famille.membre1.age += 1
    this.setState({ famille })
  }

  render () {
    const { titre, test } = this.props
    const { famille } = this.state
    return (
      <Fragment>
        <div className= 'App'>
          <h1>{titre}</h1>
          <h5>{test}</h5>
          <Membre age={famille.membre1.age} nom={famille.membre1.nom} />
          <Membre age={famille.membre2.age} nom={famille.membre2.nom} />
          <Membre age={famille.membre3.age} nom={famille.membre3.nom}>
            <strong>Je suis la.</strong>
          </Membre>
          <button onClick={this.handleClick}>Vieillir</button>
        </div>
      </Fragment>
    )
  }
}

export default App;
