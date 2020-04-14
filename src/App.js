import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

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
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ... this.state.famille}
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event) => {
  const famille = { ... this.state.famille}
  const nom = event.target.value
  console.log(nom)
  famille.membre1.nom = nom
  this.setState({ famille })
  }

  handleChangeAge = (event) => {
  const famille = { ... this.state.famille}
  const age = event.target.value
  console.log(age)
  famille.membre1.age = age
  this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow //le ! permet de faire un toggle, il va passer isShow une fois true et une fois false
    this.setState({ isShow })
  }

  render () {
    const { titre, test } = this.props
    const { famille, isShow } = this.state

    let description = null
    if (isShow){
      description = 'Je suis la'
    }

    const liste = Object.keys(famille)
      .map(membre =>(
      <Membre age={famille[membre].age} nom={famille[membre].nom} />
    ))
      console.log(liste)

    return (
      <Fragment>
        <div className= 'App'>
          <h1>{titre}</h1>
          <h5>{test}</h5>
          <input value={famille.membre1.nom} onChange={this.handleChange} type="text" />
          <input value={famille.membre1.age} onChange={this.handleChangeAge} type="text" />
          { liste }
          <Membre age={famille.membre3.age} nom={famille.membre3.nom}>
            {description}
            <button onClick={this.handleShowDescription}>
              {
                isShow ? 'cacher' : 'montrer'
              }
            </button>
          </Membre>
          <Button vieillir={() => this.handleClick(2)} />
        </div>
      </Fragment>
    )
  }
}

export default App;
