import React from 'react';

import classes from './currentTasks.module.css';

import CurrentTask from './currentTask/currentTask.js';

import { connect } from 'react-redux';

const currentTasks = (props) => {



    return (
        <div className={classes.currentTasks}>
            <p>Display current tasks</p>

            {props.currentTasks.map( el => {
                return <CurrentTask 
                key={el.id.toString()} 
                task={el.description} 
                id={el.id} />
            })}

        </div>
    );

};

const mapStateToProps = state => {
    return {
        currentTasks: state.currentTasks
    }
}



export default connect(mapStateToProps, null)(currentTasks);