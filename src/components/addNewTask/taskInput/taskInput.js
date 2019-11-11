import React from 'react';

import { connect } from 'react-redux';


let inputValue = null;

const readInput = (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
};

const clearInput = (event) => {
    document.querySelector('.JS--react--field').value = '';
};



const taskInput = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.addInput}>

                <input 
                type="text" 
                placeholder="Enter the task"
                onChange={readInput}
                className={'JS--react--field'}></input>

                <input 
                type="submit" 
                value="submit"></input>

            </form>
        </React.Fragment>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        addInput: (event) => {
            event.preventDefault();
            clearInput();
            dispatch({type:'ADD_INPUT', value: inputValue})}
    }
}


export default connect(null, mapDispatchToProps)(taskInput);