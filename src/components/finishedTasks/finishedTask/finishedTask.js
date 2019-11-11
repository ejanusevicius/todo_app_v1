import React from 'react';
import { connect } from 'react-redux';


const finishedTask = (props) => {
    return (
        <p><span onClick={props.undoFinishedTask}>-</span>  {props.task}   <span onClick={props.removeFinishedTask}>X</span></p>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeFinishedTask: () => dispatch({type: 'REMOVE_FINISHED_TASK', value: ownProps.id}),
        undoFinishedTask: () => dispatch({type: 'UNDO_FINISHED_TASK', value: ownProps.id})
    }
};

export default connect(null, mapDispatchToProps)(finishedTask);