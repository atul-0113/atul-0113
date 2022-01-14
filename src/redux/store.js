import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer, orderReducer}  from './reducers';


const rootReducer= combineReducers({
    orderReducer,
    loginReducer
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
