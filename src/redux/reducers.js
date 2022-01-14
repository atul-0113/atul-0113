import { 
    SET_ORDER_ITEMS,
    RETRIEVE_TOKEN,
    LOGIN,
    LOGOUT,
    REGISTER 
}
from './actions'

const initialState = {
    orderItem: [],    
}
const initialLoginState={
    isLoading:true,
    userName : null,
    password : null,
    userToken : null,
    mode: null,
}

function orderReducer(state = initialState, action) {
    
    switch (action.type) {
        case SET_ORDER_ITEMS :
            return { 
                ...state, 
                orderItem: action.payload };
        default:
                return state;
    }
}

function loginReducer(state = initialLoginState , action){

    switch(action.type){
        case RETRIEVE_TOKEN:
            return {
                ...state,
                userToken: action.payload,
                isLoading: false,
                mode: action.mode,
            };
        case LOGIN:
            return {
                ...state,
                userName: action.id,
                password : action.password,
                userToken: action.token,
                isLoading: false,
                mode: action.mode
            };
        case LOGOUT:
            return {
                ...state,
                userName: null,
                password : null,
                userToken: null,
                isLoading: false
            };
        case REGISTER:
            return {
                ...state,
                userName: action.id,
                password : action.password,
                userToken: action.token,
                isLoading: false
            };

        default:
            return state;
    }
}
export {loginReducer , orderReducer};