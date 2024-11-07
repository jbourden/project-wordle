import React from 'react';
import {range} from '../../utils'

function Guess({guess}) {
  console.log(guess)
  return (
    <p className="guess">{
    range(0,5).map((num) => {

      if(guess){
        console.log('The guess is ' + {guess})
      }

      return(
        <span class="cell">{guess ? guess.name[num] : ''}</span>
      )
    })}
    </p>);
}

export default Guess;
