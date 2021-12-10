import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import data from "./backend/data.js";
import { partidaListaReducer } from "./reducers/partidasReducers.js";
import { userSigninReducer } from "./reducers/userReducer.js";

const initialState = {};

const reducer = combineReducers({
    partidaLista: partidaListaReducer,
    userSignin: userSigninReducer,
});
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const match = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default match;