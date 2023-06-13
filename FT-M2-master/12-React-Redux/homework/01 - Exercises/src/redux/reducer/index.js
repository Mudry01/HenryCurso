import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";

const initialState = {
   list: [],
   storeName: ""
};

const rootReducer = (state = initialState, actions) => {
    let {type, payload} = actions;

switch(type){

    case ADD_PRODUCT:
        return {
            ...state, 
            list: [...state.list, payload]
        };
    case DELETE_PRODUCT:
        return {
            ...state,
            list: state.list.filter(product => product.id !== payload)
        };
    case REMOVE_PRODUCT:
        return {
            ...state,
            storeName: payload
        }

    default:
        return{
            ...state
        }
        
}

};

export default rootReducer;
