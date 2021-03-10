import {LOGIN,LOGOUT,CHANGE_USER_PASSWORD,UPDATE_USER_AVATAR} from '../actions/user'

let userInfo  = localStorage.getItem('userInfo');
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

const initState = {
    userInfo
}

const reducer = function(state=initState,action){
    switch(action.type){
        case LOGIN:
            localStorage.setItem('userInfo',JSON.stringify(action.user))
            return {
                ...state,
                userInfo:action.user
            }
        case LOGOUT:
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:{}
            }
        case UPDATE_USER_AVATAR:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    avatar:action.avatar
                }
            }
        case CHANGE_USER_PASSWORD:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    password:action.pasword
                }
            }

        default:
            return state;
    }
}

export default reducer