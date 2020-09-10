import {combineReducers} from "redux";
import {userReducer} from "./Users/reducers";

export const rootReducer = combineReducers({userReducer});
