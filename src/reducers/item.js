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

        default:
            return state;
    }
}

export default itemReducer;


