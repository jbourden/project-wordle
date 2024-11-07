import React from 'react';

function GuessResults({guesses}) {
  console.log({guesses})
  return (
    <div className="guess-results">
      {
        guesses.map(({name,key}) => {
          return(
          <p className="guess" key={key}>{name}</p>
          )
        })
      }
  </div>);
}

export default GuessResults;
