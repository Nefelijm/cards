import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './App.css';
import ConstruirBarajas from './Utilidades/construirBarajas';

const getEstadoInicial = () => {
  const baraja = ConstruirBarajas();
  return{
    baraja
  };
}


class App extends Component { 
  
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  } 

  render() {
    return ( 
      <div>
      <Header/> 
      <Tablero
        baraja={this.state.baraja} 
      /> 
      </div> 
    );
  }
}

export default App;
