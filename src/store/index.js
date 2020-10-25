import { createStore } from "redux";
import roootReducer from "../reducers/index";
const store = createStore(roootReducer);
window.store = store;
export default store;

