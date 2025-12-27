import { useEffect, useEffectEvent, useState, useRef } from "react";
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
  const [language, setlanguage] = useState("");
  const [randomNum, setRandomNum] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  // useEffect to set random Number
  const getWord = useEffectEvent(() => {
    // ✅ Only runs once per app load
    const randomNum = Math.floor(Math.random() * words.length);
    let wordArr = words[randomNum].split("");
    // set the guess word with hidden letters
    setGuessWord(() => {
      return wordArr.map((letter) => {
        return { letter: letter, hidden: true };
        
      })
    });
    // setrestart game to false
    setRestartGame(false);
    // isgameover to false
    setIsGameOver(false);
    // is winner
    setIsWinner(false);
    // get alphabet
    setAlphabetLetters(alphabet);
    // reset num of attemps
    setNumAttemps(0);
    // update programs
    setProgamName((prevProgram) => {
      return prevProgram.map((program) => {
        return { ...program, deleted: false };
      });
    });
  });
  useEffect(() => {
    getWord();

    
  }, [restartGame]);
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
      // update the randomNum
      setRandomNum(Math.floor(Math.random() * 11));
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

  // generate random num

  useEffect(() => {
    if (numAttempts === 1) {
      setProgramDeleted("HTML");
      setProgramDeleted("CSS");
      // set the language that is getting delted
      setlanguage("HTML and CSS");
    } else if (numAttempts === 2) {
      setProgramDeleted("Javascript");
      // set the language that is getting delted
      setlanguage("Javascript");
    } else if (numAttempts === 3) {
      setProgramDeleted("React");
      // set the language that is getting delted
      setlanguage("React");
    } else if (numAttempts === 4) {
      setProgramDeleted("Typescript");
      // set the language that is getting delted
      setlanguage("Typescript");
    } else if (numAttempts === 5) {
      setProgramDeleted("Node.js");
      // set the language that is getting delted
      setlanguage("Node.js");
    } else if (numAttempts === 6) {
      setProgramDeleted("Python");
      setlanguage("Python");
    } else if (numAttempts === 7) {
      setProgramDeleted("Ruby");
      setlanguage("Ruby");
    } else if (numAttempts === 8) {
      setProgramDeleted("Assembly");
      setlanguage("Assembly");
      setIsGameOver(true);
    }
  }, [numAttempts]);
  // useEFfect to check if it is a winner
  useEffect(() => {
    if (guessWord.length > 0) {
      const wordMatch = guessWord.every((word) => word.hidden === false);
      if (wordMatch) {
        setIsWinner(true);
      }
    }
  }, [guessWord]);

  // start game all over
  const startOver = () => {
    setRestartGame(true);
  };
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
      <Feedback
        language={language}
        randomNum={randomNum}
        numAttempts={numAttempts}
        isGameOver={isGameOver}
        isWinner={isWinner}
      />
      <Programs programNames={programNames} />
      <WordToGuess guessWord={guessWord} />
      <Alphabet
        alphabetLetters={alphabetLetters}
        guessWord={guessWord}
        getUserInput={getUserInput}
        setRandomNum={setRandomNum}
        isGameOver={isGameOver}
        startOver={startOver}
        isWinner={isWinner}
      />
    </div>
  );
}

export default App;
