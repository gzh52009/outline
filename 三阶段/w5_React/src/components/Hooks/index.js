import React from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'

import myContext from './context'

function Hooks(){
    return (
        <myContext.Provider value={{username:'jingjing',password:123}}>
            <div>
                <h2>Hooks的使用</h2>

                <UseState/>
                <UseEffect/>
                <UseMemo/>
                <UseCallback/>
                <UseContext/>
            </div>
        </myContext.Provider>
    )
}

export default Hooks;