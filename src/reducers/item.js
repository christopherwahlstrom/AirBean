const initialState = {
    item: [],
    // quant: 1
};

const itemReducer = (state = initialState, action) => {
    // console.log("state.item: ", state.item);
    // console.log("action.payload: ", action.payload);
    switch(action.type) {
        case 'ADD_ITEM':
           const newState = state.item.filter(items => items.title !== action.payload.title);  

           return {
                ...newState,
                item: [
                    ...newState,
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


