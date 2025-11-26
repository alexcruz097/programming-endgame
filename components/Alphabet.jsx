import React from "react";
import { v4 as uuidv4 } from "uuid"; // For ESM

function Alphabet() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "z",
  ];
  return (
    <div className="letter-container">
      {/* iterate thru the array to show alphabet */}
      {alphabet.map((letter, index) => {
        return (
          <button key={uuidv4()} className={`div${index} letter bg-amber-400`}>
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Alphabet;
