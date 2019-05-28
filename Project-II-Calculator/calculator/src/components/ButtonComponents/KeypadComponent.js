import React from "react";
import "./Button.css";
import NumberButton from './NumberButton'

function KeypadComponent( {numbersArray, numbersFunction, clearFunction} ) {
  return (
    <div className="keypad-numbers">
      <div onClick={clearFunction} className="clear">clear</div>
      <div className="numbers">
        {numbersArray.map(number => <NumberButton numbersFunction={numbersFunction} buttonStyle="number-button" key={number} text={number}/>)}
      </div>
    </div>
  );
}

export default KeypadComponent;