export const addItemAction = (data) => {
    console.log("data added to state: ", data);
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

export const addQuantity = (data) => {
    return {
        type: 'ADD_QUANTITY',
        payload: data
    }
}

export const decreaseQuantity = (data) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: data
    }
}

export const deleteItem = (data) => {
    return {
        type: 'DELETE_ITEM',
        payload: data
    }
}