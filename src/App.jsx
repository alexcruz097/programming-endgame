import { useState } from "react";

import "./App.css";
import Header from "../components/Header";
import Feedback from "../components/Feedback";

function App() {
  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default App;
