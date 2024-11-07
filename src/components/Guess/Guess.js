import React from 'react';
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'


function Guess({guess}) {
 
  return (
    <p className="guess">{

    range(0,5).map((num) => {
      return(
        <span key={num} className={'cell ' + guess?.checkedGuess[num].status}>{guess ? guess.name[num] : undefined}</span>
      )
    })}
    </p>);
}

export default Guess;
