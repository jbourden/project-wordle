import React from 'react';
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'


function Guess({guess, answer}) {

  const checkedGuess = guess ? checkGuess(guess.name, answer) : undefined
 
  return (
    <p className="guess">{

    range(0,5).map((num) => {
      return(
        <span key={num} className={guess ? 'cell ' + checkedGuess[num].status : 'cell'}>{guess ? guess.name[num] : undefined}</span>
      )
    })}
    </p>);
}

export default Guess;
