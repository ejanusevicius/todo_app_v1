import React from 'react';

import classes from './finishedTasks.module.css';

import FinishedTask from './finishedTask/finishedTask';

import { connect } from 'react-redux';



const finishedTasks = (props) => {

    

    let allFinishedTasks = null;

    if (props.finishedTasks) {
        allFinishedTasks = props.finishedTasks.map(el => {
            console.log(props.finishedTasks);
            return <FinishedTask
            key={el.id.toString()}
            task={el.description}
            id={el.id} />
        });
    }

    return (
        <div className={classes.finishedTasks}>
            <p>Display finished tasks</p>

            {allFinishedTasks}
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        finishedTasks: state.finishedTasks
    }
};

export default connect(mapStateToProps)(finishedTasks);