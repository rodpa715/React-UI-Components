import React from 'react';
import './Display.css';

function DisplayComponent({currentValue}) {
  return(
    <div className="display">
      <h1 className="display-numbers">{currentValue}</h1>
    </div>
  )
}

export default DisplayComponent;