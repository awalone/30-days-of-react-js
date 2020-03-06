const redux = require('redux')
const createStore = redux.createStore;

initialState = {
    value: 0,
    age: 17
}

//Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action);
    // penggunaan IF ELSE
    // if(action.type === 'ADD_AGE'){
    //     return {
    //         //copy image
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE') {
    //     return {
    //         // copy state
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }

    // penggunakan switch case
    switch(action.type) {
        case 'ADD_AGE' :
            return {
                ...state,
                age: state.age + 1
            }
        
        case 'CHANGE_VALUE' :
            return {
                ...state,
                value: state.value + action.newValue
            }

        default :
            return state;
    }
    
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//dispatching action
store.dispatch({type:'ADD_AGE'})
store.dispatch({type:'CHANGE_VALUE', newValue: 12})
console.log(store.getState())

// subsription