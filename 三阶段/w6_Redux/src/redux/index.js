export function createStore(reducer,initState){
    // redux状态
    let state = initState || reducer(undefined,{type:'@init'});

    let listeners = [];

    // 获取操作
    const getState = function(){
        return state
    }

    // 修改操作
    const dispatch = function(action){
        state = reducer(state,action);

        listeners.forEach(listener=>listener());
    }

    // 监听操作
    const subscribe = function(callback){
        listeners.push(callback);
    }

    // 替换reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer;
    }
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}

export function combineReducers(){

}

export function compose(){

}

export function applyMiddleware(){

}

export function bindActionCreators(){

}