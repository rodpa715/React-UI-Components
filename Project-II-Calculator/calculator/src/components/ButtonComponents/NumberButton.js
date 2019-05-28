import React from 'react';
import './Button.css';

function KeypadComponent() {
  return(
    <div className="keypad-numbers">
      <div className="clear">Clear</div>
      <div className="numbers">
        <div data-id="1">1</div>
        <div data-id="2">2</div>
        <div data-id="3">3</div>
        <div data-id="4">4</div>
        <div data-id="5">5</div>
        <div data-id="6">6</div>
        <div data-id="7">7</div>
        <div data-id="8">8</div>
        <div data-id="9">9</div>
        <div data-id="0">0</div>
      </div>
    </div>
  )
}

export default KeypadComponent;