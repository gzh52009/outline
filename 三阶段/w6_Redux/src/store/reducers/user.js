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
        case 'login':
            localStorage.setItem('userInfo',JSON.stringify(action.user))
            return {
                ...state,
                userInfo:action.user
            }
        case 'logout':
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:{}
            }
        default:
            return state;
    }
}

export default reducer