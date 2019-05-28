import React from "react";
import "./Button.css";
import NumbersButton from './NumbersButton'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function KeypadComponent(props) {
  return (
    <div className="keypad-numbers">
      <div className="clear">clear</div>
      <div className="numbers">
        {numbers.map(number => <NumbersButton key={number} text={number}/>)}
      </div>
    </div>
  );
}

export default KeypadComponent;