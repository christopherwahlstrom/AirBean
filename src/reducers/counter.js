const initialState = {
    counter: [1, 1, 1, 1, 1, 1, 1]
}

const counterReducer =  (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            console.log(state);

            const newCounter = state.counter.map((index) => {
                if (action.payload === state.counter[index]) {
                    state.counter[index] += 1
                }
            });



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