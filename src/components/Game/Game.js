import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess,setGuess] = React.useState('')

  const handleSubmit= ()=> {
    console.log(guess.toUpperCase())
    // if(guess.toUpperCase()===answer){
    //   window.alert('You win')
    // }
    setGuess('')
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit= {(e)=> {
        e.preventDefault()
        handleSubmit()}}>
    <label 
      htmlFor="guess-input">Enter guess, sure:</label>
    <input 
      id="guess-input" 
      type="text"
      value={guess}
      pattern="[A-Za-z]{5}"
      onChange={(event)=> setGuess(event.target.value)}
       />
  </form>);
}

export default Game;
