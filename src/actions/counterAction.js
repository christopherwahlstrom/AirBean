const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: id
    };
};

const decrement = (data) => {
    return {
        type: 'DECREMENT',
        payload: data
    };
};

export { increment, decrement }