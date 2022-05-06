const initialState = {
    counter: [1, 1, 1]
}

const counterReducer =  (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            console.log(state);
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state
    }
}

export default counterReducer;