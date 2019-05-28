import React from "react";

function NumberButton({text, buttonStyle, numbersFunction}) {
  return (
      <div onClick={numbersFunction} key={text} className={buttonStyle}>{text}</div>
  );
}

export default NumberButton;