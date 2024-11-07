import React from 'react';
import { range } from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

import Guess from '../Guess/Guess';

function GuessResults({guesses}) {
  console.log({guesses})
  const guess = 'PEARL'
  return (
    <div className="guess-results">
      {
        <>
        {range(0,NUM_OF_GUESSES_ALLOWED).map((num)=> {
          return(
            <Guess key={num} guess={guesses[num]}/>
          )
        })}
        
        </>
      }
  </div>);
}

export default GuessResults;
