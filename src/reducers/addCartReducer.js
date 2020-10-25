const initialState = {
    onCart: [false, false, false, false, false, false, false, false],
};

function addCart(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
                const newStore = state;
                if (newStore.onCart != undefined) {

                    newStore.onCart[action.payload] = !(newStore.onCart[action.payload]);
                }
                return {
                    ...newStore
                };

        case "REMOVE_FROM_CART":
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
    
}
export default addCart;