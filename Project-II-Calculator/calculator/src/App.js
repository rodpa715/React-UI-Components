import React from 'react';
import './App.css';
import OperatorsComponent from './components/ButtonComponents/ActionButton';
import KeypadComponent from './components/ButtonComponents/NumberButton';
import DisplayComponent from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div>
      <DisplayComponent />
      <div>
        <KeypadComponent />
        <OperatorsComponent />
      </div>
    </div>
  )
};

export default App;
