import React from "react";
import "./Button.css";
import NumberButton from './NumberButton'

function KeypadComponent( {numbersArray, callbackFunction} ) {
  return (
    <div className="keypad-numbers">
      <div className="clear">clear</div>
      <div className="numbers">
        {numbersArray.map(number => <NumberButton callbackFunction={callbackFunction} buttonStyle="number-button" key={number} text={number}/>)}
      </div>
    </div>
  );
}

export default KeypadComponent;