// import * as redux from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware,compose } from 'redux';
import reducer from './reducers'
import mySaga from './saga'

// 1.安装引入redux-saga
import createSagaMiddleware from 'redux-saga';

// 2. 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 3.将 sagaMiddleware 连接至 Store
// 与其他中间件配置使用：通过compose()把多个中间合并成一个中间
// const enhancer = compose(applyMiddleware(sagaMiddleware),composeWithDevTools());
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer);

// 4.引入并运行自定义Saga配置
sagaMiddleware.run(mySaga)

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