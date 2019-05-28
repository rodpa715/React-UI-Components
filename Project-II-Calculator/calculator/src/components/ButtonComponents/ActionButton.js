import React from "react";
import "./Button.css";


function OperatorsComponent( {operatorsArray} ) {
  return (
    <div className="operators">
      {operatorsArray.map(operator => <div key={operator.name} className={operator.name}>{operator.char}</div>)}
    </div>
  );
}

export default OperatorsComponent;
