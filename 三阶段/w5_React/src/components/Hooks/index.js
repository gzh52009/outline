import React from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'

function Hooks(){
    return (
        <div>
            <h2>Hooks的使用</h2>

            <UseState/>
            <UseEffect/>
            <UseMemo/>
        </div>
    )
}

export default Hooks;