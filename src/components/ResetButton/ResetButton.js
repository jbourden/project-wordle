import React from 'react';

function ResetButton({resetGame}) {
  return (
    <button className='reset' onClick={resetGame}>Reset Game</button> 
  );
}

export default ResetButton;
