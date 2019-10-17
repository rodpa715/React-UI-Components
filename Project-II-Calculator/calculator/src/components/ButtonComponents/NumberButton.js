import React from "react";

function NumberButton({text, buttonStyle, numbersFunction}) {
  return (
      <div onClick={numbersFunction} data-id={text} key={text} className={buttonStyle}>{text}</div>
  );
}

export default NumberButton;