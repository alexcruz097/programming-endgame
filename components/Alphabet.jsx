import React from "react";
import { v4 as uuidv4 } from "uuid"; // For ESM

function Alphabet({ getUserInput, guessWord, alphabetLetters }) {
  return (
    <div className="letter-container">
      {/* iterate thru the array to show alphabet */}
      {alphabetLetters.map((alpha, index) => {
        return (
          <button
            value={alpha.letter}
            onClick={getUserInput}
            key={uuidv4()}
            className={`div${index}  letter ${alpha.bgColor}`}
          >
            {alpha.letter}
          </button>
        );
      })}
    </div>
  );
}

export default Alphabet;
