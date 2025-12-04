import React from "react";
import { v4 as uuidv4 } from "uuid"; // For ESM

function Alphabet({
  getUserInput,
  alphabetLetters,
  isGameOver,
  startOver,
  isWinner,
}) {
  // update the random num when click
  const isDisabled = isGameOver || isWinner;
  //
  return (
    <>
      <div className="letter-container">
        {/* iterate thru the array to show alphabet */}
        {alphabetLetters.map((alpha, index) => {
          return (
            <button
              value={alpha.letter}
              onClick={getUserInput}
              disabled={isDisabled}
              key={uuidv4()}
              className={`div${index}  letter ${alpha.bgColor}`}
            >
              {alpha.letter}
            </button>
          );
        })}
      </div>
      {isGameOver || isWinner ? (
        <button
          onClick={startOver}
          className="bg-sky-400 mt-7 rounded-sm py-2.5 px-4 border-neutral-300 cursor-pointer"
        >
          Start New Game
        </button>
      ) : null}
    </>
  );
}

export default Alphabet;
