import React, {Component} from 'react';
import './Carta.css'
// import './Utilidades/fontCartas.css'
export default class Carta extends Component{
    render(){
        return(
            <div className = 'carta'>
             <div className={`fa ${this.props.icono} fa-3x`}>
                .
             </div>
            </div>
        );
    }
}