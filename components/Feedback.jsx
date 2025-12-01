import React, { useEffect, useEffectEvent, useRef, useState } from "react";

function Feedback({ language, randomNum }) {
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

  return (
    <div
      className="bg-violet-500 text-white 
    w-xs h-13 flex justify-center items-center
    rounded-[4px] border-dashed border-neutral-800
    my-6"
    >
      <p>{options[randomNum]}</p>
    </div>
  );
}

export default Feedback;
