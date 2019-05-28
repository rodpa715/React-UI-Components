import React from "react";

function NumberButton({text, buttonStyle, callbackFunction}) {
  return (
      <div onClick={callbackFunction} key={text} className={buttonStyle}>{text}</div>
  );
}

export default NumberButton;