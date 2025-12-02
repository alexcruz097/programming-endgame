import React, { useEffect, useState } from "react";

function Feedback({ language, randomNum, numAttempts, isGameOver }) {
  const [showMessage, setShowMessage] = useState(false);

  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];
  useEffect(() => {
    setShowMessage(true);
    const timer = setTimeout(
      () => {
        setShowMessage(false);
      },
      numAttempts===8 ? 999999 : 1500
    );
    // clean up timeout
    return () => clearTimeout(timer);
  }, [numAttempts]);

  return (
    <>
      {showMessage ? (
        <div
          className={`${isGameOver?"bg-red-500": "bg-violet-500"} text-white 
    w-xs h-13 flex justify-center items-center
    rounded-sm border-dashed border-neutral-800
    my-6`}
        >
          {/* check if game is over */}
          {isGameOver ? "Game Over" : <p>{options[randomNum]}</p>}
        </div>
      ) : (
        <div className="h-25"></div>
      )}
    </>
  );
}

export default Feedback;
