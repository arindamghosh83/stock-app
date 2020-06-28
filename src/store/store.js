import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import stockReducer from '../reducers/stocks-reducer';
import authReducer from '../reducers/auth-reducer';
import errorReducer from '../reducers/error-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    thunk
];

const initialState = {};
const rootReducer = combineReducers({stocks: stockReducer, auth: authReducer, error: errorReducer})

const stockStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default stockStore;