export const addUser = (data) => ({
  
    type: "ADD_USER",
    payload: data,
});

export const addData = (data) => ({
    type: "ADD_DATA",
    payload: data,
});
export const addToCart = (data) => ({
    type: "ADD_TO_CART",
    payload: data,
})
export const removeFromCart = (data) => ({
    type: "REMOVE_FROM_CART",
    payload: data,
})