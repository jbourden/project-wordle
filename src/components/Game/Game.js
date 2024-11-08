import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner'
import ResetButton from '../ResetButton/ResetButton'

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')
  const [answer, setAnswer] = React.useState(sample(WORDS))
  
  const handleSubmitGuess = (guess) => {
    const newGuess = {
      name: guess,
      key: crypto.randomUUID(),
    }

    const newGuessesArr = [...guesses, newGuess]

    setGuesses(newGuessesArr)

    if(guess===answer) {
      setGameStatus('won')
      return
    }
  
    if(newGuessesArr.length === 6) {
      setGameStatus('lost')
    }
    
  }

  const resetGame = () => {
    setGameStatus('running')
    setGuesses([])
    setAnswer(sample(WORDS))
  }

  return (
    <>
    <ResetButton resetGame={resetGame}/>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
    {gameStatus === 'won' && (<WonBanner numOfGuesses = {guesses.length}/>)}
    {gameStatus === 'lost' && (<LostBanner answer={answer}/>)}
    </>
  );
}

export default Game;
