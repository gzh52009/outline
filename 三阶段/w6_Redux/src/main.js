import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';

const initState = {
    userInfo:{
        username:'laoxie',
        password:123456
    }
}

const reducer = function(state,action){
    switch(action.type){
        case 'login':
        return {
            ...state,
            userInfo:action.user
        }
        case 'logout':
            return {
                ...state,
                userInfo:{}
            }
        default:
            return state;
    }
}

const store = createStore(reducer,initState);
store.subscribe(()=>{
    console.log('修改',store.getState())
})
console.log('store=',store);
const state = store.getState();
console.log('state=',state);
store.dispatch({type:'logout'})
console.log('state2=',store.getState());
import App from './App'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.querySelector('#app')
)