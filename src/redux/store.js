import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducer/add-user";

const reducer = combineReducers({
  users: userReducer,
});
const initialState = {};

const store = createStore(reducer, initialState);

export default store;
