export const addItemToCartAction = (data) => {
    console.log("itemAction - data: ", data);
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: data
    }
}