import React from "react";

function NumberButton(props) {
  return (
      <div key={props.text} className={props.buttonStyle}>{props.text}</div>
  );
}

export default NumberButton;