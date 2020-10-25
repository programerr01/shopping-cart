import {combineReducers} from "redux";
import addUser from "./addReducer";
import addCart from "./addCartReducer";
const rootReducer = combineReducers({
    addUser,
    addCart,
})
export default rootReducer;