import React from 'react';
import { connect } from 'react-redux';

let itemKey = null;

const currentTask = (props) => {

    console.log(`rerendeing`);

    itemKey = props.id;
    console.log(`[props.id]`)
    console.log(itemKey);

    return (
        <p key={props.id}><span onClick={props.completeTask}>+</span>   {props.task}   <span onClick={props.removeCurrentTask}>X</span></p>
    );


};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeCurrentTask: () => dispatch({type: 'REMOVE_CURRENT_TASK', value: ownProps.id}),
        completeTask: () => dispatch({type: 'TASK_COMPLETED', value: ownProps.id})
    }
};



export default connect(null, mapDispatchToProps)(currentTask);