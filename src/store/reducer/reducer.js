const initialState = {

    currentTasks: [],

    finishedTasks: []

};

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_INPUT') {
        console.log('[Reducer.js]');
        console.log(action.value);
        console.log(`before push`);
        console.log(state);
        return {
            ...state,

            currentTasks: state.currentTasks.concat({
                description: action.value,
                id: Math.floor(Math.random() * 10000)
            })
        
        }
    }

    if (action.type === 'TASK_COMPLETED') {
        console.log('[Reducer.js]');
        const inputID = action.value;
        console.log(inputID);
        const newState = {...state,
            currentTasks: [
                ...state.currentTasks
            ],
            finishedTasks: [
                ...state.finishedTasks
            ]
        };

        console.log(newState);

        console.log(newState.currentTasks);

        const elementID = newState.currentTasks.findIndex(el => el.id === inputID);
        console.log(elementID);

        const newVar = newState.currentTasks[elementID];
        console.log(newVar);

        newState.currentTasks.splice(elementID, 1);

        newState.finishedTasks.push(newVar);

        console.log(newState);

        return newState;


    }

    if (action.type === 'REMOVE_FINISHED_TASK') {
        console.log(`[Reducer.js]`);
        //get input ID
        const inputID = action.value;
        console.log(inputID);
        //create newState
        const newState = {...state,
            finishedTasks: [...state.finishedTasks]
        };

        console.log(newState);

        //find index from the element
        const elementID = newState.finishedTasks.findIndex( el => el.id === inputID );
        console.log(elementID);

        //cut element

        newState.finishedTasks.splice(elementID, 1);

        return newState;
    };

    if (action.type === 'UNDO_FINISHED_TASK') {
        console.log(`[Reducer.js]`);

        //get input ID
        const inputID = action.value;
        console.log(inputID);

        //create new state
        const newState = {...state,
            finishedTasks: [...state.finishedTasks],
            currentTasks: [...state.currentTasks]};

        console.log(newState);

        //find ID
        const elementID = newState.finishedTasks.findIndex( el => el.id === inputID );
        console.log(elementID);

        //prepare the variable for transfer
        const transferVar = newState.finishedTasks[elementID];
        console.log(transferVar);

        //splice the element away
        newState.finishedTasks.splice(elementID, 1);
        console.log(newState);

        // add the element to the currentTasks
        newState.currentTasks.push(transferVar);
        console.log(newState);

        //return old state
        return newState;
    }

    if (action.type === 'REMOVE_CURRENT_TASK') {
        //get ID:
        const inputID = action.value;

        //get new state
        const newState = {...state,
            currentTasks: [...state.currentTasks]
        };

        
        //get element ID
        const elementID = newState.currentTasks.findIndex( el => el.id === inputID);
        console.log(elementID);

        //cut the element away
        newState.currentTasks.splice(elementID, 1);

        //return new state
        return newState;

    }

    return state;
};

export default reducer;