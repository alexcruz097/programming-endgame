import React from "react";
import { v4 as uuidv4 } from "uuid"; // For ESM
function WordToGuess({ guessWord }) {
  return (
    <div className="guess-container mt-10">
      {guessWord.map((letter) => {
        return (
          <p key={uuidv4()} className="guess-letter">
            {letter.hidden ? null: letter.letter.toUpperCase() }
          </p>
        );
      })}
    </div>
  );
}

export default WordToGuess;
