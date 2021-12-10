import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import data from "./backend/data.js";

const initialState = {};

const reducer = (state, action) =>{
    return{partidas: data.partidas};
};


const match = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default match;