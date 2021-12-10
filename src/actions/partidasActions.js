import Axios from "axios";
import { PARTIDA_LIST_REQUEST, PARTIDA_LIST_SUCCESS, PARTIDA_LIST_FAILED } from "../constantes/partidasConstant"

export const listPartidas = () =>async(dispatch) =>{
    dispatch({
        type: PARTIDA_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get('/api/partidas');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: PRODUCT_LIST_FAILED, payload: error.message});
    }
}