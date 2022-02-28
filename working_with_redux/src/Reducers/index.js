import { combineReducers } from "redux";
import productReducer from "./productReducer";

var rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer;