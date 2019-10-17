import React, {useState} from 'react';
import './App.css';
import OperatorsComponent from './components/ButtonComponents/ActionButton';
import NumpadComponent from './components/ButtonComponents/NumpadComponent';
import DisplayComponent from './components/DisplayComponents/CalculatorDisplay'

const operators = [
  {
    name: "divide",
    char: "÷",
  },
  {
    name: "multiply",
    char: "x",
  },
  {
    name: "subtract",
    char: "-",
  },
  {
    name: "add",
    char: "+",
  },
  {
    name: "execute",
    char: "=",
  }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const operatorFunctions = {
  divide: function (a, b) {return a / b},
  multiply: function (a, b) {return a * b},
  subtract: function (a, b) {return a - b},
  add: function (a, b) {return a + b},
  execute: (a,b) => console.log("sorry not yet worked at", a, b),
}

const App = () => {
  let previousValue = 0;
  let [currentValue, updateValue] = useState(0);

  const addToDisplay = (e) => {
    updateValue(currentValue === 0 ? currentValue = e.target.dataset.id : currentValue + e.target.dataset.id)
    console.log("current ",currentValue)
  }

  const clearDisplay = (e) => { updateValue(currentValue = 0) }

  const operate = (e) => {
    previousValue = currentValue
    let operation =  operatorFunctions[`${e.target.className}`]
    updateValue(currentValue = operation(parseInt(previousValue), parseInt(currentValue)))
   }

  return (

    <div className="calculator">
      <DisplayComponent currentValue={currentValue} />
      <div className="keypad">
        <NumpadComponent clearFunction={clearDisplay} numbersFunction={addToDisplay} numbersArray={numbers}/>
        <OperatorsComponent operatorFunction={operate} operatorsArray={operators} />
      </div>
    </div>
  )
};

export default App;
