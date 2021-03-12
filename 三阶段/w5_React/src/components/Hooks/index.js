import React,{useReducer,useContext} from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import MyHook from './MyHook'

import myContext from './context'
import {myContext as Context} from './store'

function Hooks(){
    const [state] = useContext(Context)
    return (
        <myContext.Provider value={{username:'jingjing',password:123}}>
            <div>
                <h2>Hooks的使用</h2>
                <p>购物车商品数量：{state.length}</p>
                {/* <UseState/> */}
                <UseEffect/>
                {/* <UseMemo/>
                <UseCallback/>
                <UseContext/>
                <UseReducer/> */}
                <MyHook/>
            </div>
        </myContext.Provider>
    )
}

export default Hooks;