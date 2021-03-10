import { combineReducers } from 'redux';
import userReducer from './user'
import currentClassReducer from './currentClass'

// 把多个reducer合并成一个
const reducer = combineReducers({
    user:userReducer,
    currentClass:currentClassReducer
})


export default reducer;