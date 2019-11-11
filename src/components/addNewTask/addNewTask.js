import React from 'react';
import classes from './addNewTask.module.css';

import TaskInput from './taskInput/taskInput';


const addNewTask = (props) => {
    return (
        <div className={classes.addNewTask}>
            <p> Task input </p>
            <TaskInput />
        </div>
    );

}

export default addNewTask;