import React, {useState} from 'react';
import './App.css';
import OperatorsComponent from './components/ButtonComponents/ActionButton';
import NumpadComponent from './components/ButtonComponents/NumpadComponent';
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
  const previousValue = 0;
  let [currentValue, updateValue] = useState(0);

  const addToDisplay = (e) => {
    updateValue(currentValue === 0 ? currentValue = e.target.dataset.id : currentValue + e.target.dataset.id)
    console.log(currentValue)
  }

  const clearDisplay = (e) => { console.log(e.target.className) }

  const operate = (e) => { console.log(e.target.className) }

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
