import React, {Component} from 'react';
import './Carta.css'
import FlipCard from 'react-flipcard-2';
export default class Carta extends Component{
    render(){
        return(            
            <div className = 'carta'>
               <FlipCard>
                   <div className ='portada'></div>									 
									 <div className={`fa ${this.props.icono} fa-3x contenido`}>
									 </div>									   
								
               </FlipCard>
            </div>
        );
    }
}