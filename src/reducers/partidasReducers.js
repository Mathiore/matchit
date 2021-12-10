const { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAILED} = require('../constantes/partidasConstant');

export const partidaListaReducer = (state = {partidas: []}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return{loading:false, partidas: action.payload};
        case PRODUCT_LIST_FAILED:
            return{loading: false, error: action.payload};
        default:
            return state;
    }

}