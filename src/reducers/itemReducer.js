const initialState = { 
  cartItems: []
};

const cartItemReducer = (state = initialState, action) => {

  //console.log("itemReducer - initialState: ", initialState);
  console.log("itemReducer - state: ", state);
  //console.log("itemReducer - action: ", action);
  console.log("itemReducer - action.payload: ", action.payload);


  switch(action.type) {
    case 'ADD_ITEM':
      const copyArray = [...state.cartItems];
      const filterdState = copyArray.filter(item => item.title !== action.payload.title); // no dupes plz
      
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

    case 'DELETE_ITEM':

      const newItemArray = [...state.cartItems];
      const copyItemArray = newItemArray.filter(item => item.quantity >= 1 );
      return {
        ...state,
        cartItems: copyItemArray
      }

      
    case 'ADD_QUANTITY':

      const copyCartItems = [...state.cartItems];
      const newCartItems = copyCartItems.map((item) => {
        if (action.payload === item.title) {
          item.quantity += 1
          return item
        }
        return item

      });
      return {
        ...state,
        cartItems: newCartItems
      }

    case 'DECREASE_QUANTITY':

      const copycartItems = [...state.cartItems];
      const newcartItems = copycartItems.map((item) => {
        if (action.payload === item.title) {
          item.quantity -= 1
          return item
        }
        return item

      });
      return {
        ...state,
        cartItems: newcartItems
      }

    default:
      return state
  }
}

export default cartItemReducer;