import React from "react";

function NumbersButton(props) {
  return (
      <div key={props.text}>{props.text}</div>
  );
}

export default NumbersButton;