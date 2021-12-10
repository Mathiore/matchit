import { USER_SIGNIN_FAILED, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constantes/userConstants";

export const userSigninReducer = (state = {}, action) =>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading:false, userInfo: action.payload};
        case USER_SIGNIN_FAILED:
            return {loadin:false, error: action.payload};
        case USER_SIGNOUT:
            return {};
        default:
            return state;
        }
};