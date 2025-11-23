import React from "react";

function Header() {
  return (
    <div className="header-container color-white w-3xl flex flex-col items-center text-center pt-16">
      <h1 className="text-3xl text-yellow-50">Assembly: Endgame</h1>
      <p className="text-neutral-400">
        Guess the word in under 8 attemps to keep the <br />
        programming world safe from Assembly!
      </p>
    </div>
  );
}

export default Header;
