import { createStore } from 'redux';

let userInfo  = localStorage.getItem('userInfo');
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

const initState = {
    userInfo
}

const reducer = function(state,action){
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

const store = createStore(reducer,initState);

console.log('start=',store.getState())
store.subscribe(()=>{
    console.log('修改',store.getState())
})
// console.log('store=',store);
// const state = store.getState();
// console.log('state=',state);
// store.dispatch({type:'logout'})
// console.log('state2=',store.getState());

export default store;