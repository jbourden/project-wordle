import React from 'react';

function Banner({isWinner, numOfGuesses, answer}) {
  return (
    <div className={isWinner ? 'happy banner' : 'sad banner'}>
  {isWinner ? 
    (<p>
      <strong>Congratulations!</strong> Got it in 
      <strong> {numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}</strong>.
    </p>) : 
    (<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>)}
</div>
  );
}

export default Banner;
