import React, {Component} from "react";
import './Header.css';

export default class Header extends Component {
    render(){
        return(
				<header className = "header">
				  <h3 className = "title"> Juego de Cartas </h3>
          <button className = "play">JUGAR</button>
          <div className = "hits">ACIERTOS</div>
        </header>
        );
    }
};


