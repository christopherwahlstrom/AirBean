export const addItemAction = (data) => {
    console.log("data added to state: ", data);
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}