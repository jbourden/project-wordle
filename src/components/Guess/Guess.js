import React from 'react';
import {range} from '../../utils'

function Guess({guess}) {
  
  return (
    <p className="guess">{
    range(0,5).map((num) => {

      return(
        <span key={num} className="cell">{guess ? guess.name[num] : undefined}</span>
      )
    })}
    </p>);
}

export default Guess;
