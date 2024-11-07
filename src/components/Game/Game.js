import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    const newGuess = {
      name: guess,
      key: crypto.randomUUID()
    }
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
    <GuessInput handleSubmitGuess={handleSubmitGuess}/>
    <GuessResults guesses={guesses}/>
    </>
  );
}

export default Game;
