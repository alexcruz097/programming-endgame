import React, { useEffect, useState, useRef } from "react";

function Feedback({ language, randomNum, numAttempts, isGameOver, isWinner }) {
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

  const isFirstRender = useRef(false);
  useEffect(() => {
    if (!isFirstRender.current) {
      isFirstRender.current = true;
      return;
    }
    setShowMessage(true);
    const timer = setTimeout(
      () => {
        setShowMessage(false);
      },
      numAttempts === 8 || isWinner ? 999999 : 1500
    );
    // clean up timeout
    return () => clearTimeout(timer);
  }, [numAttempts, isWinner]);

  // ✅ Background color logic

  // ✅ Background color logic
  let bgColor = "bg-violet-500"; // default
  if (isGameOver) {
    bgColor = "bg-red-500";
  } else if (isWinner) {
    bgColor = "bg-green-500";
  }

  // ✅ Text logic
  let displayText = "";
  if (isWinner) {
    displayText = "Winner";
  } else if (isGameOver) {
    displayText = "Game Over";
  } else {
    displayText = options[randomNum];
  }

  return (
    <>
      {showMessage ? (
        <div
          className={`${bgColor} text-white 
          w-xs h-13 flex justify-center items-center
          rounded-sm border-dashed border-neutral-800
          my-6`}
        >
          {displayText}
        </div>
      ) : (
        <div className="h-25"></div>
      )}
    </>
  );
}

export default Feedback;
