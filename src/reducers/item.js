const initialState = {
    item: [],
    // quant: 1
};

const itemReducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                item: [
                    ...state.item,
                    action.payload
                ]
            }
        case 'CLEAR':
            return state = [];

        case 'INCREMENT':
            console.log(state)
            return {
                ...state
            }
        case 'DECREMENT':
            return {
                ...state,
                quant: state.item.quant - action.payload
            }
        default:
            return state;
    }
}

export default itemReducer;


