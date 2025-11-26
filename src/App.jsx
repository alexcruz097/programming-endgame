import { useEffect, useEffectEvent, useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import programmingName from "../programmingName";
import Programs from "../components/Programs";
import Alphabet from "../components/Alphabet";
import { words } from "../word";
import WordToGuess from "../components/WordToGuess";
function App() {
  const programNames = programmingName;
  const [guessWord, setGuessWord] = useState([]);
  // useEffect to set random Number
  const getWord = useEffectEvent(() => {
    // ✅ Only runs once per app load
    const randomNum = Math.floor(Math.random() * words.length);
    setGuessWord(words[randomNum].split(""));
  });
  useEffect(() => {
    getWord();
  }, []);
  console.log(guessWord);
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
      <Alphabet guessWord={guessWord} />
    </div>
  );
}

export default App;
