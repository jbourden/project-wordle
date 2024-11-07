import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameOver, setGameOver] = React.useState(false)
  const [isWinner, setIsWinner] = React.useState(false)

  const checkWinner = (guess) => {
    if(guess===answer) {
      setGameOver(true)
      setIsWinner(true)
      return
    }

    // this feels very wrong. I want to get around using state for counting but the guesses array doesn't set its state before this check which ends up using 7 guesses for the banner to show.
    if(guesses.length + 1 === 6) {
      setGameOver(true)
    }
  }
  const handleSubmitGuess = (guess) => {
    const newGuess = {
      name: guess,
      key: crypto.randomUUID(),
    }
    setGuesses([...guesses, newGuess])
    checkWinner(guess)
  }

  return (
    <>
    
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess}/>
    {gameOver ? <Banner isWinner={isWinner} numOfGuesses = {guesses.length} answer={answer}/> : undefined}
    </>
  );
}

export default Game;
