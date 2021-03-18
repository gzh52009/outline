/**
 * saga配置
 *  - 生成器函数
 */

import {takeEvery,takeLatest,put,call,apply} from 'redux-saga/effects'
import request from '@/utils/request'
import userAction from '../actions/user'


// function * hello(){
//     console.log('hello saga')
// }

function* init(){
    // 监听saga action： 当监听到CHANGE_QTY_ASYNC命令时`store.dispath({type:'CHANGE_QTY_ASYNC'})`，自动调用changeQty;
    yield takeLatest('CHANGE_QTY_ASYNC',changeQty);
    yield takeLatest('LOGIN_ASYNC',login);
    // yield takeLatest('XXX',XXX);
}

// store.dispath({type:'CHANGE_QTY_ASYNC',_id,qty})
function * changeQty(action){
    // 发起ajax请求，获取库存数量
    // const {data} = yield request('/goods/kucun',{
    //     _id
    // });
    const {data} = yield call(request,'/goods/kucun',{
        _id
    });

    if(qty>data.kucun){
        qty = data.kucun
    }

    yield put({
        type:'CHANGE_QTY',
        _id,
        qty
    })
}

function * login({username,password}){
    const {data} = yield call(request,'/login',{
        username,
        password
    })

    // put({
    //     type:'login',
    //     user:data.data
    // })
    yield put(userAction.login(data.data));
}


export default init;