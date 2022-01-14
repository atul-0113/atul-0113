export const SET_ORDER_ITEMS = 'SET_ORDER_ITEMS'
export const RETRIEVE_TOKEN = 'RETRIEVE_TOKEN'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const PASSWORD = 'PASSWORD'
export const MODE= 'MODE'

export const setOrder = orderItem => dispatch =>{
    dispatch({
        type: 'SET_ORDER_ITEMS',
        payload: orderItem,
    })
}
export const setToken = token=> dispatch =>{
    dispatch({
        type: 'RETRIEVE_TOKEN',
        payload: token,
    })
}
export const setLogin = login => dispatch =>{
    dispatch({
        type: 'LOGIN',
        payload: login,
    })
}
export const setLogout = logout => dispatch =>{
    dispatch({
        type: 'LOGOUT',
        payload: logout,
    })
}
export const setMode = mode => dispatch =>{
    dispatch({
        type: 'MODE',
        payload: mode,
    })
}