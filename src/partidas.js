import { createStore } from "redux";
import data from "./backend/data.js";

const initialState = {};

const reducer = (state, action) =>{
    return{partidas: data.partidas};
};

const match = createStore(reducer, initialState);

export default match;