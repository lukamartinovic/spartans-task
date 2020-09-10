import {applyMiddleware, createStore} from "redux";
import {rootReducer} from './rootReducer'
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [reduxThunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));