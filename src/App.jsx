import { useEffect, useEffectEvent, useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import programmingName from "../programmingName";
import Programs from "../components/Programs";
import Alphabet from "../components/Alphabet";
import { words } from "../word";
import { alphabet } from "../alphabetLetter";
import WordToGuess from "../components/WordToGuess";
function App() {
  const [programNames, setProgamName] = useState(programmingName);
  const [guessWord, setGuessWord] = useState([]);
  const [alphabetLetters, setAlphabetLetters] = useState([]);
  const [numAttempts, setNumAttemps] = useState(0);
  // useEffect to set random Number
  const getWord = useEffectEvent(() => {
    // ✅ Only runs once per app load
    const randomNum = Math.floor(Math.random() * words.length);
    let wordArr = words[randomNum].split("");
    // set the guess word with hidden letters
    setGuessWord(() => {
      return wordArr.map((letter) => {
        return { letter: letter, hidden: true };
      });
    });
    // get alphabet
    setAlphabetLetters(alphabet);
  });
  console.log(programNames);
  useEffect(() => {
    getWord();
  }, []);
  // get the letter of the user
  const getUserInput = (e) => {
    // check if letter pressed matches with any letter in the guess word
    let letterGuess = e.target.value.toLowerCase();

    const matchingLetter = guessWord.some((letter) => {
      return letter.letter === letterGuess;
    });
    // change the color of the background
    if (matchingLetter) {
      setAlphabetLetters((prevLetters) => {
        return prevLetters.map((letter) => {
          if (letterGuess.toUpperCase() === letter.letter) {
            return { ...letter, bgColor: "bg-green-400" };
          } else {
            return letter;
          }
        });
      });
      // update number of tries
      setNumAttemps((prev) => prev + 1);
    }
    // update the display of the guess word
    if (matchingLetter) {
      setGuessWord((prev) => {
        return prev.map((letter) => {
          if (letterGuess === letter.letter) {
            return { ...letter, hidden: false };
          } else {
            return letter;
          }
        });
      });
    }
    // if no match, change the background color to red
    if (!matchingLetter) {
      setAlphabetLetters((prevLetters) => {
        return prevLetters.map((letter) => {
          if (letterGuess.toUpperCase() === letter.letter) {
            return { ...letter, bgColor: "bg-red-400" };
          } else {
            return letter;
          } // add the guess word
        });
      });
      setNumAttemps((prev) => prev + 1);
    }
  };

  // helper function to update deleted state from program
  const setProgramDeleted = (programName) => {
    setProgamName((prevPrograms) => {
      return prevPrograms.map((program) => {
        if (program.name === programName) {
          return { ...program, deleted: true };
        } else {
          return program;
        } // add the guess word
      });
    });
  };
  useEffect(() => {
    if (numAttempts === 1) {
      setProgramDeleted("HTML");
      setProgramDeleted("CSS");
    } else if (numAttempts === 2) {
      setProgramDeleted("Javascript");
    } else if (numAttempts === 3) {
      setProgramDeleted("React");
    } else if (numAttempts === 4) {
      setProgramDeleted("Typescript");
    } else if (numAttempts === 5) {
      setProgramDeleted("Node.js");
    } else if (numAttempts === 6) {
      setProgramDeleted("Python");
    } else if (numAttempts === 7) {
      setProgramDeleted("Ruby");
    } else if (numAttempts === 8) {
      setProgramDeleted("Assembly");
      alert("Game Deleted");
    }
  }, [numAttempts]);

  return (
    <div
      className="
      game-container 
      bg-neutral-800  
      flex flex-col
      items-center
      "
    >
      <Header />
      <Feedback />
      <Programs programNames={programNames} />
      <WordToGuess guessWord={guessWord} />
      <Alphabet
        alphabetLetters={alphabetLetters}
        guessWord={guessWord}
        getUserInput={getUserInput}
      />
    </div>
  );
}

export default App;
