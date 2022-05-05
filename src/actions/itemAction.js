const addItem = (data) => {
    console.log("Data added to state: ", data);
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

export default addItem;