import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const allReducers = combineReducers({ productsReducer });

export default allReducers;
