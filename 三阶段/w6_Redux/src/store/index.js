// import * as redux from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer,composeWithDevTools());

// console.log('start=',store.getState())
// store.subscribe(()=>{
//     console.log('修改',store.getState())
// })
// console.log('redux=',redux);
// console.log('store=',store);
// const state = store.getState();
// console.log('state=',state);
// store.dispatch({type:'logout'})
// console.log('state2=',store.getState());

export default store;