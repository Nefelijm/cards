import React, {Component} from 'react';
import './Carta.css'
import FlipCard from 'react-flipcard-2';
export default class Carta extends Component{
    render(){
        return(            
            <div className = 'carta' onClick={this.props.seleccionarCarta}>
							 <FlipCard
								 flipped={this.props.estaSiendoComparada ||
							   this.props.fueAdivinada}
								disabled={true}
							 >
                   <div className ='portada'></div>									 
									 <div className={`fa ${this.props.icono} fa-3x contenido`}>
									 </div>									   
								
               </FlipCard>
            </div>
        );
    }
}