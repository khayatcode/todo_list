import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Task from './components/Task';

function App() {
  const [taskArray, setTaskArray] = useState([])
  return (
    <div className="App">
      <Task taskArray = {taskArray} setTaskArray = {setTaskArray}/>
      <Display taskArray = {taskArray} setTaskArray = {setTaskArray}/>
    </div>
  );
}

export default App;
