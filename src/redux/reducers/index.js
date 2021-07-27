import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({ productsReducer, cartReducer });

export default allReducers;
