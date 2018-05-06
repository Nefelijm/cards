import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './App.css';
import ConstruirBarajas from './Utilidades/construirBarajas';

const getEstadoInicial = () => {
  const baraja = ConstruirBarajas();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false
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
        parejaSeleccionada = {this.state.parejaSeleccionada}
        seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
      /> 
      </div> 
    );
  }

  seleccionarCarta(carta){
    if(
      this.state.estaComparando || this.state.parejaSeleccionada.indexOf(carta) > -1 || carta.fueAdivinada
    ){
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    })
  }
}

export default App;
