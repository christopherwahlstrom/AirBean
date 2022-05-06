//const initialState = { item: []};
const initialState = { cartItems: []};

const cartItemReducer = (state = initialState, action) => {
  console.log("itemReducer - initialState: ", initialState);
  console.log("itemReducer - state: ", state);
  console.log("itemReducer - action: ", action);
  console.log("itemReducer - action.payload: ", action.payload);

  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      //const newState = state.item.filter(items => items.title !== action.payload.title); 
      const newState = state.cartItems.filter(items => items.title !== action.payload.title); 
      return {
        ...newState,
        cartItems: [
          ...newState,
          action.payload
        ]
      }
      default:
        return state
  }
}

export default cartItemReducer;