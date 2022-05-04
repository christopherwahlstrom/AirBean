const initialState = {
    item: []
};

const itemReducer = (state = initialState, action) => {
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

export default itemReducer

