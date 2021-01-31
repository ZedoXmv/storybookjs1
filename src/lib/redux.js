// src/lib/redux.js

// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.

import { createStore } from "redux";

// The actions are the "names" of the changes that can happen to the store
export const actions = {
    ARHCIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
    UNPIN_TASK: 'UNPIN_TASK',
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = id => ({type: actions.ARHCIVE_TASK,id });
export const pinTask = id => ({type: actions.PIN_TASK,id });
export const unPinTask = id => ({type: actions.UNPIN_TASK,id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(task => task.id === action.id ? { ...task,state: taskState} : task),
        }
    }
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {

        case actions.ARHCIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED') (state, action);
            
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED') (state, action);

        case actions.UNPIN_TASK:
            return taskStateReducer('TASK_INBOX') (state, action);
            
        default:
            return state;

    }
}


// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX'},
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_PINNED' },
    { id: '6', title: 'Task 6', state: 'TASK_ARCHIVED' },
]

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks});