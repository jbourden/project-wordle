import React from 'react';

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [guess,setGuess] = React.useState('')

  const handleSubmit= ()=> {    
    handleSubmitGuess(guess)
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
    required
    disabled={gameStatus !== 'running'}
    id="guess-input" 
    type="text"
    value={guess}
    minLength={5}
    maxLength={5}
    pattern="[A-Za-z]{5}"
    onChange={(event)=> setGuess(event.target.value.toUpperCase())}
     />
</form>);
}

export default GuessInput;
