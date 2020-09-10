import {combineReducers} from "redux";
import {userReducer} from "./users/reducers";

export const rootReducer = combineReducers({userReducer});
