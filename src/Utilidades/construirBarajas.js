import shuffle from 'lodash.shuffle';
import  FontIconCartas from './fontCartas.js';

const NUMERO_DE_CARTAS = 8;

export default () => {
  const fontCartas = FontIconCartas();
  let cartas = [];

  while(cartas.length < NUMERO_DE_CARTAS){
    const index = Math.floor(Math.random() * fontCartas.length);
    const carta = {
      icono: fontCartas.splice(index, 1)[0],
      fueAdivinada: false
		};
		
    cartas.push(carta);
		cartas.push({...carta});
		
    }

    return shuffle(cartas);
};