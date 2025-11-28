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
  const programNames = programmingName;
  const [guessWord, setGuessWord] = useState([]);
  const [alphabetLetters, setAlphabetLetters] = useState([]);
  const [userGuessLetter, setUserGuessLetter] = useState([]);
  // useEffect to set random Number
  const getWord = useEffectEvent(() => {
    // ✅ Only runs once per app load
    const randomNum = Math.floor(Math.random() * words.length);
    setGuessWord(words[randomNum].split(""));
    // get alphabet
    setAlphabetLetters(alphabet);
  });
  useEffect(() => {
    getWord();
  }, []);
  // get the letter of the user
  const getUserInput = (e) => {
    // check if letter pressed matches with any letter in the guess word
    let letterGuess = e.target.value.toLowerCase();
    if (guessWord.includes(letterGuess)) {
      setAlphabetLetters((prevLetters) => {
        return prevLetters.map((letter) => {
          if (letterGuess.toUpperCase() === letter.letter) {
            return { ...letter, bgColor: "bg-green-400" };
          } else {
            return letter;
          } // add the guess word
        });
      });
    }

    if (!guessWord.includes(letterGuess)) {
      setAlphabetLetters((prevLetters) => {
        return prevLetters.map((letter) => {
          if (letterGuess.toUpperCase() === letter.letter) {
            return { ...letter, bgColor: "bg-red-400" };
          } else {
            return letter;
          } // add the guess word
        });
      });
    }
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
      <Feedback />
      <Programs programNames={programNames} />
      <WordToGuess guessWord={guessWord} />
      <Alphabet
        alphabetLetters={alphabetLetters}
        guessWord={guessWord}
        getUserInput={getUserInput}
        userGuessLetter={userGuessLetter}
      />
    </div>
  );
}

export default App;
