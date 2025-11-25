import React from "react";
import { useState } from "react";
function Programs(props) {
  // variable to display text color for programs
  let textColor = "";
  function generatePrograms() {
    // generate markup
    return props.programNames.map((program) => {
      // conditional render color of text
      if (
        program.name === "Javascript" ||
        program.name === "React" ||
        program.name === "Python"
      ) {
        textColor = "text-black";
      } else {
        textColor = "text-white";
      }
      return (
        // return P of programs
        <p className={`${program.bgColor} ${textColor}`} key={program.id}>
          {program.name}
        </p>
      );
    });
  }
  // display programs
  return <div className="programs-container">{generatePrograms()}</div>;
}

export default Programs;
