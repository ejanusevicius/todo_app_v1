import React from 'react';
import './App.css';

import AddNewTask from './components/addNewTask/addNewTask';
import CurrentTasks from './components/currentTasks/currentTasks';
import FinishedTasks from './components/finishedTasks/finishedTasks';

import { connect } from 'react-redux';

const app = () => {
  return (
    <div className="App">
      <AddNewTask />
      <CurrentTasks />
      <FinishedTasks />
    </div>
  );
};



export default app;
