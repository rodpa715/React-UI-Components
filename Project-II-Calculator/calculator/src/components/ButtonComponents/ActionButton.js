import React from "react";
import "./Button.css";


function OperatorsComponent( {operatorsArray, operatorFunction} ) {
  return (
    <div className="operators">
      {operatorsArray.map(operator => <div onClick={operatorFunction} key={operator.name} className={operator.name}>{operator.char}</div>)}
    </div>
  );
}

export default OperatorsComponent;
