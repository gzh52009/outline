import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '@/store';
import App from './App'

// 测试简化版redux
// import {createStore} from './redux';
// const inistState = {
//     userInfo:{}
// }
// const reducer = function(state=inistState,action){
//     switch (action.type) {
//         case 'login':
//             return {
//                 ...state,
//                 userInfo:action.user
//             }
    
//         default:
//             return state;
//     }
// }
// const myStore = createStore(reducer);
// myStore.subscribe(()=>{
//     //当state有修改时，执行这里的代码
//     console.log('subscribe1',myStore.getState())
// })
// myStore.subscribe(()=>{
//     //当state有修改时，执行这里的代码
//     console.log('subscribe2',myStore.getState())
// })
// console.log('initState=',myStore.getState());// 得到一个最新的state
// myStore.dispatch({type:'login',user:{username:'laoxie',password:123456}})

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)