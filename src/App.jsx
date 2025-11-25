import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import programmingName from "../programmingName";
import Programs from "../components/Programs";
import Alphabet from "../components/Alphabet";
function App() {
  const [programNames, setProgramNames] = useState(programmingName);

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
      <Programs programNames={programNames}/>
      <Alphabet />
    </div>
  );
}

export default App;
