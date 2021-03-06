import Axios from "axios";
import { USER_SIGNIN_FAILED, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constantes/userConstants"

export const signin = (email, password) => async(dispatch) =>{
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const{data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch(error){
        dispatch({
            type: USER_SIGNIN_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message:error.message,
        });
    }
};