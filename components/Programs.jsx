import React from "react";
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
        <div
          className={`${program.bgColor} ${textColor} programs`}
          key={program.id}
        >
          {program.name}
          {program.deleted ? <p className="skull-icon">💀</p> : null}
        </div>
      );
    });
  }
  // display programs
  return <div className="programs-container">{generatePrograms()}</div>;
}

export default Programs;
