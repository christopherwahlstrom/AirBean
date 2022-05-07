export const addItemAction = (data) => {
    console.log("data added to state: ", data);
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: id
    }
}