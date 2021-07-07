import createDataContext from './index';

var initialState = {
    orderItems: []
};

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'CART_ORDER':
            return {
                ...state,
                orderItems : action.payload
            }    
        default:
            break;
    }
}

export const updateCart = (dispatch) => async (params, callback) => {
    try {
         await dispatch({type: 'CART_ORDER', payload: params});
         if (callBack) {
            callBack();
        }
        return true;

    }catch (error){

    }
}

export const { Context, Provider } = createDataContext(CartReducer,  updateCart , initialState);
