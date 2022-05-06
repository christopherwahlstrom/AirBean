const initialState = { 
  cartItems: []
};

const cartItemReducer = (state = initialState, action) => {
  console.log("itemReducer - initialState: ", initialState);
  console.log("itemReducer - state: ", state);
  console.log("itemReducer - action: ", action);
  console.log("itemReducer - action.payload: ", action.payload);

  switch(action.type) {
    case 'ADD_ITEM':
      const filterdState = state.cartItems.filter(item => item.title !== action.payload.title); // no dupes plz
      
      if(filterdState.length == state.cartItems.length) {
        action.payload.key = state.cartItems.length;
        return {
          ...filterdState,
          cartItems: [
            ...filterdState,
            action.payload
          ]
        }
      }
      return {
        ...state
      }
      default:
        return state
  }
}

export default cartItemReducer;