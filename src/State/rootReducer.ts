import {combineReducers} from "redux";
import {usersFetchingError, usersFetching, usersFetched} from "./reducers";

export const rootReducer = combineReducers({usersFetchingError, usersFetching, usersFetched});
