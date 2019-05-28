import React, {useState} from 'react';
import './App.css';
import OperatorsComponent from './components/ButtonComponents/ActionButton';
import KeypadComponent from './components/ButtonComponents/KeypadComponent';
import DisplayComponent from './components/DisplayComponents/CalculatorDisplay'

const operators = [
  {
    name: "divide",
    char: "÷",
    operator: "/",
  },
  {
    name: "multiply",
    char: "x",
    operator: "*",
  },
  {
    name: "subtract",
    char: "-",
    operator: "-",
  },
  {
    name: "add",
    char: "+",
    operator: "+",
  },
  {
    name: "execute",
    char: "=",
    operator: "equals",
  }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const App = () => {
  const [value, updateValue] = useState(0);

  const addToDisplay = () => {
    updateValue(value +1)
    console.log(value)
  }

  const clearDisplay = () => { console.log("clear") }

  const operate = () => { console.log("operator") }

  return (
    <div className="calculator">
      <DisplayComponent />
      <div className="keypad">
        <KeypadComponent clearFunction={clearDisplay} numbersFunction={addToDisplay} numbersArray={numbers}/>
        <OperatorsComponent operatorFunction={operate} operatorsArray={operators} />
      </div>
    </div>
  )
};

export default App;
