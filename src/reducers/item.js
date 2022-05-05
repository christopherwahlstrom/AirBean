const initialState = {
    item: [],
    // quant: 1
};

const itemReducer = (state = initialState, action) => {
    console.log("state.item: ", state.item);
    console.log("action.payload: ", action.payload);
    switch(action.type) {
        case 'ADD_ITEM':
           const newState = state.item.filter(items => items.title !== action.payload.title);  

           console.log("newState",newState);

           return {
                ...newState,
                item: [
                    ...newState,
                    action.payload
                ]
            }
            /*
            return {
                ...state,
                item: [
                    ...state.item,
                    action.payload
                ]
            }
            */
        case 'CLEAR':
            return state = [];

        case 'INCREMENT':
            return {
                ...state,
                item: [
                    ...state.item.quant,
                    { quant: action.payload }
                ] 
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


