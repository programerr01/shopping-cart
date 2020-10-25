const initialState = {
    users:[]
};

function addUser(state = initialState, action){
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload)
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "ADD_DATA":
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
    
}
export default addUser;