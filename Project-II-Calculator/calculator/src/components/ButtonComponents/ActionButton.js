import React from 'react';
import './Button.css';

function OperatorsComponent(){
  return(
    <div className="operators">
      <div className="divide">÷</div>
      <div className="multiply">x</div>
      <div className="subtract">-</div>
      <div className="add">+</div>
      <div className="execute">=</div>
    </div>
  )
}

export default OperatorsComponent;