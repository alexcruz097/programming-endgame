import React from "react";

function WordToGuess({ guessWord }) {
  return (
    <div className="guess-container mt-10">
      {guessWord.map((letter) => {
        return <p className="guess-letter">{letter.toUpperCase()}</p>;
      })}
    </div>
  );
}

export default WordToGuess;
